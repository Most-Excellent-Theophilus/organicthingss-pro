import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { API, IMAGEPATH, PRODUCTS } from "@/lib/Constants";
import { formatCurrency } from "@/lib/formatters";
import axios from "axios";
import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

export function Edit() {
  const { id } = useParams();
  // const navigate = useNavigate();
  const navigate = useNavigate();
  const [pending, setPending] = useState(false);
  const [priceInMWK, setPriceInMWK] = useState<number | undefined>();
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [imagePath, setImagePath] = useState();

  const [message, setMessage] = useState("");

  useEffect(() => {
    handleDownload();
  }, []);

  const handleDownload = async () => {
    try {
      const response = await axios.get(API + PRODUCTS + `${id}`);
      // setData(response.data)
      setPriceInMWK(response.data.priceInMWK);
      setName(response.data.name);
      setDescription(response.data.description);
      setImagePath(response.data.imagePath);
    } catch (error) {
      console.error("Error updating the product:", error);
      setMessage("Server not responing");
    }
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPending(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("slug", name + "-product");
    formData.append("priceInMWK", priceInMWK);
    formData.append("description", description);

    try {
      const response = await axios.put(API + PRODUCTS + id, {
        name: name,
        slug: name + "-product",
        priceInMWK: priceInMWK,
        description: description,
      });
      setMessage("Product update");
      console.log("File uploaded successfully:", response.data);
      setTimeout(() => {
        setMessage("");
        navigate(-1);
      }, 3000);
    } catch (error) {
      setMessage("Un able to create new product");
      console.error("Error uploading the file:", error);
    } finally {
      setPending(false);
    }

    // for (const [key, value] of formData.entries()) {
    //   console.log(`${key}: ${value}`);
    // }
  };

  return (
    <>
      <div className="flex justify-between items-center gap-4">
        <PageHeader>
          <Button
            onClick={() => {
              navigate(-1);
            }}
            size="icon"
            variant="outline"
            className="place-self-center"
          >
            {" "}
            <ChevronLeft size={34} />{" "}
          </Button>

          <h1 className="ml-4">New Product</h1>
        </PageHeader>
        {message ? <p className="text-primary">{message}!!!</p> : null}
      </div>
      <form className="mt-4 md:mx-20" onSubmit={handleSubmit} id="form">
        <div className="mt-2 space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="mt-2 space-y-2">
          <Label htmlFor="priceInMWK">Price In Malawian Kwacha</Label>
          <Input
            type="number"
            id="priceInMWK"
            name="priceInMWK"
            value={priceInMWK}
            onChange={(e) => setPriceInMWK(Number(e.target.value) || undefined)}
            required
          />
          <div className="text-muted-foreground">
            {formatCurrency(priceInMWK || 0) + `.00`}
          </div>
          <div className="text-muted-foreground"></div>
        </div>
        <div className="mt-2 space-y-2">
          <Label htmlFor="description">Description</Label>
          <Input
            id="description"
            name="description"
            required
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>

        <div className="mt-2 space-y-2 mb-4">
          <Label htmlFor="imagePath">Image</Label> <br />
          <img className="w-80" src={IMAGEPATH + imagePath} alt="" />
          <Label htmlFor="imagePath" className="underline">
            Note: if you want to change Image, Delete the Product and create a
            new one!!!
          </Label>
        </div>
        <Button type="submit" disabled={pending}>
          {pending ? "Saving..." : "Save"}
        </Button>
      </form>
    </>
  );
}
