export interface LoadingCommands {
  isShow(): boolean;
  show(): void;
  hide(): void;
  getLastHideTime(): number;
}

export interface LoadingProps {}
