type Props = {
    name: string,
    role: string
}
export default function Card({name,role}: Props){
   
    return(
      <>
        <h1>{name}</h1>
        <p>{role}</p>
      </>
    )
}