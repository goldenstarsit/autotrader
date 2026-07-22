import type {
  IndicatorInput,
  IndicatorResult
} from "./types.js";


export abstract class Indicator {

  constructor(
    public readonly name: string
  ) {}


  abstract calculate(
    input: IndicatorInput
  ): IndicatorResult;


  protected timestamp(): string {

    return new Date()
      .toISOString();

  }
}
