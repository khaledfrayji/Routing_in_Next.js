// Props are inputs sent from a parent component to a child component.
// Think of them like function arguments: the parent provides data,
// and the child reads that data to decide what to render.
type CardProps = {
  // Best practice: use clear names and strict types so intent is obvious.
  // `name` and `role` are required strings for this UI card.
  name: string;
  role: string;
};

// Best practice: use `Readonly` for props to document the rule that
// props should never be mutated inside a component.
export default function Card({ name, role }: Readonly<CardProps>) {
  return (
    <>
      {/* Values below come from props passed by the parent. */}
      <h1>{name}</h1>
      <h2>Hello</h2>
      <p>{role}</p>
    </>
  );
}