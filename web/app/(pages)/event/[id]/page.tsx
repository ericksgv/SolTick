interface Props {
  params: {
    id: string;
  };
}


export default function EventPage({params}: Props) {
  return (
    <div>
      <h1>Hello Page</h1>
    </div>
  );
}