import AddLink from "./AddLink";
import LinkLists from "./LinkLists";
import Statistics from "./Statistics";

function ActionSection() {
    return (
        <div className="action-section">
            <AddLink />
            {/* <LinkLists /> */}
            <Statistics />
        </div>
    )
}

export default ActionSection