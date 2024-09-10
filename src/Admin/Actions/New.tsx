import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { API, PRODUCTS } from "@/lib/Constants";
import { formatCurrency } from "@/lib/formatters";
import axios from "axios";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function New() {
  const navigate = useNavigate();
  const [pending, setPending] = useState(false);
  const [priceInMWK, setPriceInMWK] = useState<number | undefined>();
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");

  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");
  

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
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

    if (!file) {
      console.error("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("slug", name + "-product");
    formData.append("priceInMWK", priceInMWK);
    formData.append("description", description);
    formData.append("imagePath", file);
    formData.append("available", "false");

    try {
      // Send the file and description via Axios
      const response = await axios.post(API + PRODUCTS, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage("Created New Product");
      console.log("File uploaded successfully:", response.data);
      setTimeout(()=>{
        setMessage("")
        navigate(-1)
      },3000)
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
          <Label htmlFor="imagePath">Image</Label>
          <Input
            type="file"
            id="imagePath"
            name="imagePath"
            onChange={handleFileChange}
            accept="image/*"
            required
          />
        </div>
        <Button type="submit" disabled={pending}>
          {pending ? "Saving..." : "Save"}
        </Button>
      </form>
    </>
  );
}
