export const waiting = (): Waiting => ({
  kind: "waiting",
});

export const loading = (state: Waiting | Ready | Loading): Loading => {
  const { kind, ...previous } = state;
  return {
    kind: "loading",
    ...previous,
  };
};

export const ready = (state: Loading | Ready): Ready => {
  const { kind, ...previous } = state;
  return {
    kind: "ready",
    ...previous,
  };
};

export const error = (message: string): Error => ({
  kind: "error",
  message,
});

interface Waiting {
  kind: "waiting";
}

export interface Loading {
  kind: "loading";
}

interface Ready {
  kind: "ready";
}

interface Error {
  kind: "error";
  message: string;
}

export type State = Waiting | Loading | Ready | Error;
