import { deleteRequest, getRequests, getPlumbers, saveCompletion } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "plumbers") {
            const [requestId, plumberId] = event.target.value.split("--")

            const completion = {
                requestId: `${requestId}`,
                plumberId: `${plumberId}`,
                date_created: 4567
            }
        
           saveCompletion(completion)
            
        }
    }
)


export const Requests = () => {
    const requests = getRequests()
    const plumbers = getPlumbers()
    let html = `<ul`
    
    const listItemsArray = requests.map(request => {
        return `<li>
                    ${request.description}
                    <button class="request__delete"
                            id="request--${request.id}">
                        Delete
                    </button>
                    <select class="plumbers" id="plumbers">
                    <option value="">Completed By</option>
                    ${
                        plumbers.map(
                            plumber => {
                                return `<option value="${request.id}--${plumber.id}">${plumber.name}</option>`
                            }
                        ).join("")
                    }
                </select>
                </li>`
    })
            
    html += listItemsArray.join("")

    html += `</ul>`
    return html
}

// const convertRequestToListItem = (requestObject) => {
//         for (const requestObject of requests) {
//             return `<li>
//             This is the ${requestObject.description}
//             </li>`
//         }
//     }

//        let html = `
//         <ul>
//             ${
//                 requests.map(convertRequestToListItem).join("")
//             }
//         </ul>
//     `    