import Shake from "shake.js";

/**
 * Generates result for each dice in a provided list.
 * @param {List} dice
 */
export const roll = (dice) => {
  return dice.map((d) => ({
    ...d,
    result: Math.floor(Math.random() * d.sides + 1),
  }));
};

/**
 * Enables shake and fires an onSuccess callback.
 *
 * TODO: Fix potential memory leaks for roll.
 *
 * @param {Function} onSuccess
 */
export const enableShake = (onSuccess, onFailure) => {
  if (!window.DeviceMotionEvent) {
    window.alert("Your device does not allow device motion.");
    onFailure();

    return;
  }

  const _onShakeEnabled = () => {
    const shakeEvent = new Shake({
      threshold: 15, // optional shake strength threshold
      timeout: 1000, // optional, determines the frequency of event generation
    });

    shakeEvent.start();

    onSuccess();
  };

  if (typeof window.DeviceMotionEvent.requestPermission === "function") {
    window.DeviceMotionEvent.requestPermission()
      .then((permissionState) => {
        if (permissionState === "granted") {
          _onShakeEnabled();
        }
      })
      .catch(() => {
        window.alert("There was an error enabling device motion.");
        onFailure();
      });
  } else {
    _onShakeEnabled();
  }
};
