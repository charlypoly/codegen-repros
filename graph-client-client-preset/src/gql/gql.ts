/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  query pairs {\n    pair(id: \"0x00004ee988665cdda9a1080d5792cecd16dc1220\") {\n      id\n      token0 {\n        id\n        symbol\n        name\n      }\n      token1 {\n        id\n        symbol\n        name\n      }\n    }\n  }\n": types.PairsDocument,
};

export function graphql(source: "\n  query pairs {\n    pair(id: \"0x00004ee988665cdda9a1080d5792cecd16dc1220\") {\n      id\n      token0 {\n        id\n        symbol\n        name\n      }\n      token1 {\n        id\n        symbol\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query pairs {\n    pair(id: \"0x00004ee988665cdda9a1080d5792cecd16dc1220\") {\n      id\n      token0 {\n        id\n        symbol\n        name\n      }\n      token1 {\n        id\n        symbol\n        name\n      }\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;