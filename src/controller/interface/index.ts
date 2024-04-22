import { BasicResponse } from "../types";
/**
 * Controller Interface for Hello Controller 
 * */
export interface IHelloController {
    getMessage(name?: string): Promise<BasicResponse>;
}