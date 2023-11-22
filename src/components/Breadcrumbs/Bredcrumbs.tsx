
type nameInfo={
    name:string
}
export function Breadcrumbs(props:nameInfo) {
    return (
        <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
            <li className="active">{props.name}</li>
        </ol>
    )
}


   


 
