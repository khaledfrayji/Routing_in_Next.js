type Props = {
    name: string,
    role: string
}
export default function Card({name,role}: Props){
   
    return(
      <>
        <h1>{name}</h1>
        <h2>Hello</h2>
        <p>{role}</p>
      </>
    )
}