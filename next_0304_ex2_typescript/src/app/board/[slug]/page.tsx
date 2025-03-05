
export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const { slug } = await params
    return <div>My Post: {slug}</div>
  }

  // export default function Page(props) {
  //   return(
  //     <div>
  //       <h2>{props.params.slug}</h2>
  //     </div>
  //   );
  // }