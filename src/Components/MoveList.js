import React from "react"; 



const MoveList = (props) => {

const {result} = props;


    return (
        <div className="move-list-container">
        {result.moves.map((move, idx) => (
            <div className="move-list" key={idx}>
            <details><summary><h4>{move.move.name}</h4></summary>
            {move.version_group_details.map((version, idx) =>(
                <>
                <h5>Move Name:</h5>
                <p key={idx}>{version.version_group.name}</p>
                <h5>Learn Method</h5>
                <p key={idx.idx}>{version.move_learn_method.name}</p>
                
                </>
            ))}</details>
            </div>
        ))}

        </div>
    );
}



export default MoveList;