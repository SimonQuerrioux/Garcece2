import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function School(props) {
  const { regija, obcina, naziv, naslov, postna_stevilka, posta, email } =
    props.data;
  return (
    <Card>
      <CardHeader>
        <CardTitle>{naziv}</CardTitle>
        <CardDescription>{regija}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          <div className="inline font-bold">Naslov : </div> {naslov}
        </p>
        <p>
          <div className="inline font-bold">Poštna števika : </div>{" "}
          {postna_stevilka}
        </p>
      </CardContent>
      <CardFooter>
        <p>
          <div className="inline font-bold">E-poštni naslov : </div> {email}
        </p>
      </CardFooter>
    </Card>
  );
}
