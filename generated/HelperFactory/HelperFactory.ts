// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class FundFulfilled extends ethereum.Event {
  get params(): FundFulfilled__Params {
    return new FundFulfilled__Params(this);
  }
}

export class FundFulfilled__Params {
  _event: FundFulfilled;

  constructor(event: FundFulfilled) {
    this._event = event;
  }

  get helperContract(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get funder(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get beneficiary(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get fulfilledAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class FundRequested extends ethereum.Event {
  get params(): FundRequested__Params {
    return new FundRequested__Params(this);
  }
}

export class FundRequested__Params {
  _event: FundRequested;

  constructor(event: FundRequested) {
    this._event = event;
  }

  get helperContract(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get funder(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get beneficiary(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get requestedAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class HelperCreated extends ethereum.Event {
  get params(): HelperCreated__Params {
    return new HelperCreated__Params(this);
  }
}

export class HelperCreated__Params {
  _event: HelperCreated;

  constructor(event: HelperCreated) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get helper(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class HelperFactory__getFundRequestsResultValue0Struct extends ethereum.Tuple {
  get requestedAmount(): BigInt {
    return this[0].toBigInt();
  }

  get fulfilledAmount(): BigInt {
    return this[1].toBigInt();
  }

  get helper(): Address {
    return this[2].toAddress();
  }

  get beneficiary(): Address {
    return this[3].toAddress();
  }

  get isFunded(): boolean {
    return this[4].toBoolean();
  }
}

export class HelperFactory extends ethereum.SmartContract {
  static bind(address: Address): HelperFactory {
    return new HelperFactory("HelperFactory", address);
  }

  createHelper(
    _amount: BigInt,
    _duration: BigInt,
    _recipient: Address,
    _description: string,
  ): Address {
    let result = super.call(
      "createHelper",
      "createHelper(uint256,uint256,address,string):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(_amount),
        ethereum.Value.fromUnsignedBigInt(_duration),
        ethereum.Value.fromAddress(_recipient),
        ethereum.Value.fromString(_description),
      ],
    );

    return result[0].toAddress();
  }

  try_createHelper(
    _amount: BigInt,
    _duration: BigInt,
    _recipient: Address,
    _description: string,
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "createHelper",
      "createHelper(uint256,uint256,address,string):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(_amount),
        ethereum.Value.fromUnsignedBigInt(_duration),
        ethereum.Value.fromAddress(_recipient),
        ethereum.Value.fromString(_description),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getFundRequests(
    _user: Address,
  ): Array<HelperFactory__getFundRequestsResultValue0Struct> {
    let result = super.call(
      "getFundRequests",
      "getFundRequests(address):((uint256,uint256,address,address,bool)[])",
      [ethereum.Value.fromAddress(_user)],
    );

    return result[0].toTupleArray<HelperFactory__getFundRequestsResultValue0Struct>();
  }

  try_getFundRequests(
    _user: Address,
  ): ethereum.CallResult<
    Array<HelperFactory__getFundRequestsResultValue0Struct>
  > {
    let result = super.tryCall(
      "getFundRequests",
      "getFundRequests(address):((uint256,uint256,address,address,bool)[])",
      [ethereum.Value.fromAddress(_user)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<HelperFactory__getFundRequestsResultValue0Struct>(),
    );
  }

  getHelperAddress(user: Address): Array<Address> {
    let result = super.call(
      "getHelperAddress",
      "getHelperAddress(address):(address[])",
      [ethereum.Value.fromAddress(user)],
    );

    return result[0].toAddressArray();
  }

  try_getHelperAddress(user: Address): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getHelperAddress",
      "getHelperAddress(address):(address[])",
      [ethereum.Value.fromAddress(user)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }
}

export class CompleteFundDetailsCall extends ethereum.Call {
  get inputs(): CompleteFundDetailsCall__Inputs {
    return new CompleteFundDetailsCall__Inputs(this);
  }

  get outputs(): CompleteFundDetailsCall__Outputs {
    return new CompleteFundDetailsCall__Outputs(this);
  }
}

export class CompleteFundDetailsCall__Inputs {
  _call: CompleteFundDetailsCall;

  constructor(call: CompleteFundDetailsCall) {
    this._call = call;
  }

  get _index(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CompleteFundDetailsCall__Outputs {
  _call: CompleteFundDetailsCall;

  constructor(call: CompleteFundDetailsCall) {
    this._call = call;
  }
}

export class CreateHelperCall extends ethereum.Call {
  get inputs(): CreateHelperCall__Inputs {
    return new CreateHelperCall__Inputs(this);
  }

  get outputs(): CreateHelperCall__Outputs {
    return new CreateHelperCall__Outputs(this);
  }
}

export class CreateHelperCall__Inputs {
  _call: CreateHelperCall;

  constructor(call: CreateHelperCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _duration(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _recipient(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _description(): string {
    return this._call.inputValues[3].value.toString();
  }
}

export class CreateHelperCall__Outputs {
  _call: CreateHelperCall;

  constructor(call: CreateHelperCall) {
    this._call = call;
  }

  get helper(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class RequestFundCall extends ethereum.Call {
  get inputs(): RequestFundCall__Inputs {
    return new RequestFundCall__Inputs(this);
  }

  get outputs(): RequestFundCall__Outputs {
    return new RequestFundCall__Outputs(this);
  }
}

export class RequestFundCall__Inputs {
  _call: RequestFundCall;

  constructor(call: RequestFundCall) {
    this._call = call;
  }

  get _index(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _funder(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class RequestFundCall__Outputs {
  _call: RequestFundCall;

  constructor(call: RequestFundCall) {
    this._call = call;
  }
}
