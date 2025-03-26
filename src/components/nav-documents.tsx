"use client"

import {

  type Icon,
} from "@tabler/icons-react"


import {

  useSidebar,
} from "@/components/ui/sidebar"

export function NavDocuments({
  items,
}: {
  items: {
    name: string
    url: string
    icon: Icon
  }[]
}) {
  const { isMobile } = useSidebar()

  return (
<>
</>
  )
}
