import { TestSuite } from "jovo-core";
import { SAPCAIRequestBuilder } from "./SAPCAIRequestBuilder";
import { SAPCAIResponseBuilder } from "./SAPCAIResponseBuilder";

export interface SAPCAITestSuite extends TestSuite<SAPCAIRequestBuilder, SAPCAIResponseBuilder> {}