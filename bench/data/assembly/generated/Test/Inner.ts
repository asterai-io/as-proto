// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v0.9.2
//   protoc        v3.20.3

import { Writer, Reader } from "@asterai/as-proto/assembly";
import { InnerInner } from "./Inner/InnerInner";
import { Outer } from "../Outer";

export class Inner {
  static encode(message: Inner, writer: Writer): void {
    writer.uint32(8);
    writer.int32(message.int32);

    const innerInner = message.innerInner;
    if (innerInner !== null) {
      writer.uint32(18);
      writer.fork();
      InnerInner.encode(innerInner, writer);
      writer.ldelim();
    }

    const outer = message.outer;
    if (outer !== null) {
      writer.uint32(26);
      writer.fork();
      Outer.encode(outer, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): Inner {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Inner();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.int32 = reader.int32();
          break;

        case 2:
          message.innerInner = InnerInner.decode(reader, reader.uint32());
          break;

        case 3:
          message.outer = Outer.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  int32: i32;
  innerInner: InnerInner | null;
  outer: Outer | null;

  constructor(
    int32: i32 = 0,
    innerInner: InnerInner | null = null,
    outer: Outer | null = null
  ) {
    this.int32 = int32;
    this.innerInner = innerInner;
    this.outer = outer;
  }
}
