import {Head} from "@inertiajs/inertia-react";

export default function Index({events}) {
  return (
    <>
        <Head title="jui" />
      <h1>{events.length} Events</h1>
        <ul>
            <li>Ooooooo</li>
        </ul>
    </>
  )
}