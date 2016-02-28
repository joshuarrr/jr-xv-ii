const store = window.store = {
  _watchers: [],

  // Loaded
  _isLoaded: false,
  get isLoaded() { return this._isLoaded; },
  set isLoaded(loaded) { this._isLoaded = loaded; this.notify(); },

  // DevMode
  _isDevMode: false,
  get isDevMode() { return this._isDevMode; },
  set isDevMode(devMode) { this._isDevMode = devMode; this.notify(); },

  // Infinigram
  _isInfinigramming: false,
  get isInfinigramming() { return this._isInfinigramming; },
  set isInfinigramming(yes) { this._isInfinigramming = yes; this.notify(); },

  // Watch
  register(watcher) { this._watchers.push(watcher); },
  notify() { this._watchers.forEach(w => w()); }
};

  export default store;
