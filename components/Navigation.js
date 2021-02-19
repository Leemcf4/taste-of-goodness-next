import * as React from "react"
import { motion } from "framer-motion"
import { MenuItem } from "./MenuItem"

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const links = [
  {
    id: 0,
    path: "/",
    text: "HELLO!",
  },
  {
    id: 1,
    path: "/ourstory",
    text: "OUR STORY",
  },
  {
    id: 3,
    path: "/whatsgood",
    text: "WHATSGOOD",
  },
  {
    id: 4,
    path: "/ourfamily",
    text: "OURFAMILY",
  },
  {
    id: 5,
    path: "/wheretofind",
    text: "WHERETOFINDUS",
  },
  {
    id: 6,
    path: "/videos",
    text: "VIDEOS",
  },
  {
    id: 7,
    path: "/callus",
    text: "CALLUS",
  },
]

export const Navigation = ({ toggle, isOpen }) => (
  <motion.ul variants={variants}>
    {links.map((i) => (
      <MenuItem
        i={i}
        key={i.id}
        path={i.path}
        text={i.text}
        toggle={toggle}
        isOpen={isOpen}
      />
    ))}
  </motion.ul>
)
