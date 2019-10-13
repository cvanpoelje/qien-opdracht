import * as actions from "../definitions";
import { ClientDevice} from "types";

export const CLIENT_REDUCER_INIT_STATE = {

    /***
     * Client TOken
     */
    grant: null,
    hasClientToken: false,

    /***
     * Header Analysis
     */
    client: ClientDevice,

    /***
     * Screen sizes (document, viewPort, windowe)
     */
    screen: null
};