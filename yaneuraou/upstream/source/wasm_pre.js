/* global Module, PThread, setTimeout */
(function () {
  // Message listeners

  let quit = false;
  let listeners = [];

  Module["print"] = function (line) {
    if (listeners.length === 0) return;
    else
      setTimeout(function () {
        for (let i = 0; i < listeners.length; i++) listeners[i](line);
      });
  };

  Module["addMessageListener"] = function (listener) {
    listeners.push(listener);
  };

  Module["removeMessageListener"] = function (listener) {
    let idx = listeners.indexOf(listener);
    if (idx >= 0) listeners.splice(idx, 1);
  };

  Module["terminate"] = function () {
    quit = true;
    PThread.terminateAllThreads();
  };

  // Command queue

  let queue = [];
  let backoff = 1;

  function poll() {
    let command = queue.shift();
    if (quit || command === undefined) return;

    if (command === "quit") return Module["terminate"]();

    let tryLater = Module["ccall"]("usi_command", "number", ["string"], [command]);
    if (tryLater) queue.unshift(command);
    backoff = tryLater ? backoff * 2 : 1;
    setTimeout(poll, backoff);
  }

  Module["postMessage"] = function (command) {
    queue.push(command);
  };

  Module["postRun"] = function () {
    Module["postMessage"] = function (command) {
      queue.push(command);
      if (queue.length === 1) poll();
    };
    poll();
  };
})();
