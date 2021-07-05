interface Repository {
  Find<T>(): Promise<T>;
  Create<T>(Data: T): Promise<T>;
}

export default Repository;
