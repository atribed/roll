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
 * @param {Function} onSuccess
 */
export const enableShake = (onSuccess) => {
  const _onShakeEnabled = () => {
    const shakeEvent = new Shake({
      threshold: 15, // optional shake strength threshold
      timeout: 1000, // optional, determines the frequency of event generation
    });

    shakeEvent.start();

    window.addEventListener("shake", roll, false);

    onSuccess();
  };

  if (typeof DeviceMotionEvent.requestPermission === "function") {
    DeviceMotionEvent.requestPermission()
      .then((permissionState) => {
        if (permissionState === "granted") {
          _onShakeEnabled();
        }
      })
      .catch(console.error);
  } else {
    _onShakeEnabled();
  }
};
