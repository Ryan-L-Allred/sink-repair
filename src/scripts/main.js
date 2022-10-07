import { SinkRepair } from "./SinkRepair.js"
import { fetchRequests, fetchPlumbers, fetchCompletions } from "./dataAccess.js"



export const mainContainer = document.querySelector("#container")



const render = () => {
    fetchRequests()
    .then(() => fetchPlumbers())
    .then(() => fetchCompletions())
    .then(
        () => {
            mainContainer.innerHTML = SinkRepair()
        }
    )
    
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)
