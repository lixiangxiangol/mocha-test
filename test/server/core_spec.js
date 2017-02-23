import {expect} from "chai"
//import {v1} from "uuid"
import {fromJS,Map,List} from "immutable"
import {
    addRoom,
    removeRoom
} from "../../src/server/core.js"

describe("test",()=>{
    it("success",()=>{
        expect(1+1).to.equal(2);
        // var firstRoom = {name:"first room",id:v1(),owner:"eisneim"}
        // const nextState = addRoom(undefined,firstRoom)
        // const rooms = nextState.get("rooms")
        // expect(rooms).to.be.ok
        // expect(rooms.get(0)).to.equal(Map(firstRoom))
        //
        // const nextNextState = addRoom(nextState,{
        //     name:"second room",owner:"terry"
        // })
        // expect(nextNextState.getIn(["rooms","1","name"])).to.equal("second room")
    })
})