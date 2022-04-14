export interface HotkeyParams {
  key: string;
  alt?: boolean;
  shift?: boolean;
  control?: boolean;
  meta?: boolean;
  callback?: () => void;
};


export const hotkey = (node: HTMLElement, params: HotkeyParams) => {
  let handler: (this: Window, ev: KeyboardEvent) => void;

  const removeHandler = () => window.removeEventListener('keydown', handler);

  const setHandler = () => {
      removeHandler();

      if (!params) return;

      handler = (e) => {
          if (
            (!!params.alt !== e.altKey) ||
            (!!params.shift !== e.shiftKey) ||
            (!!params.control !== e.ctrlKey) ||
            (!!params.meta !== e.metaKey) ||
            params.key !== e.key
          ) {
            return;
          }
          e.preventDefault();
          params.callback ? params.callback() : node.click();
      };

      window.addEventListener('keydown', handler);
  };

  setHandler();

  return {
    update: setHandler,
    destroy: removeHandler,
  };
};

