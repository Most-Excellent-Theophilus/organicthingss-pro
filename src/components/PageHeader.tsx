import { ReactNode } from "react"

export function PageHeader({ children }: { children: ReactNode }) {
  return <h1 className="text-xl font-bold m-2 text-primary flex">{children}</h1>
}
