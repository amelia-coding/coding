export interface Action<T = any> {
  type: T;
}

export interface AnyAction extends Action {
  // Allows any extra properties to be defined in an action.
  [extraProps: string]: any;
}

export interface ActionCreator<A> {
  (...args: any[]): A;
}

export interface ActionCreatorsMapObject<A = any> {
  [key: string]: ActionCreator<A>;
}
