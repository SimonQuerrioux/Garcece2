import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function School(props) {
  const { regija, obcina, naziv, naslov, postna_stevilka, posta, email, ds, web, trr } =
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
         <p>
          <div className="inline font-bold">E-poštni naslov : </div> {email}
        </p>
      </CardContent>
      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="inline" variant="">Več informacij</Button>
          </DialogTrigger>
          <DialogContent>
            <h2 className="text-lg font-bold">{naziv}</h2>
            <p>
          <div className="inline">Davčna številka : </div> {ds}
        </p>
         <p>
          <div className="inline">Bančni račun : </div> {trr}
        </p>
         <p>
          <div className="inline">Spletna stran : </div> {web}
        </p>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
