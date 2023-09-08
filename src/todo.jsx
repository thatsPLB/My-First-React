import { render } from "react-dom"

export default function todo(){
    task = "I am useless"
    return(
        <li>Task: {task}</li>
    )
}
// export default function todo(task, isDone){
//     if(isDone === true){
//         return <li>Finished: {task}</li>
//     }
//     else{
       // return <li>work on: {task}</li>
//     }
// }
// conditional rendaring 2
// export default function todo(task, isDone){
//     if(isDone){
//         return <li>Finished: {task}</li>
//     }
//     return <li>work on: {task}</li>
    
// }
// conditional rendaring 3
// export default function todo(task, isDone){
//    return (
//     <li> {isDone ? 'Finished': 'Work on'} : {task} </li>
//    )
// }
// conditional rendering 4:&&
// export default function todo(task, isDone){
//    return (
//     <li>{task} {isDone && ': done'} </li>
//    )
// }
// conditional rendering 5:||
// export default function todo(task, isDone){
//    return (
//     <li>{task} {isDone || ': done'} </li>
//    )
// }
// conditional rendaring 2
// export default function todo(task, isDone){
//     if(isDone){
//         return <li>Finished: {task}</li>
//     }
//     return <li>work on: {task}</li>
    
// }
// conditional rendaring 6
// export default function todo(task, isDone){
//     let listItem;
//     if(isDone){
//         listItem = <li>Finished: {task}</li>
//     }
//     else{
//         listItem = <li>work on: {task}</li>
//     } 
//     return listItem;
// }