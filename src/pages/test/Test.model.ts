export interface ITest {
  // TODO: define fields here
}

export class TestModel implements ITest {
  constructor(init?: Partial<ITest>) {
    Object.assign(this, init);
  }
}

