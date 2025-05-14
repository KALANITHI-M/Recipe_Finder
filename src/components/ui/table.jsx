import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * @typedef {import('react').HTMLAttributes<HTMLTableElement>} TableProps
 * @typedef {import('react').HTMLAttributes<HTMLTableSectionElement>} TableSectionProps
 * @typedef {import('react').HTMLAttributes<HTMLTableRowElement>} TableRowProps
 * @typedef {import('react').ThHTMLAttributes<HTMLTableCellElement>} TableHeadProps
 * @typedef {import('react').TdHTMLAttributes<HTMLTableCellElement>} TableCellProps
 * @typedef {import('react').HTMLAttributes<HTMLTableCaptionElement>} TableCaptionProps
 */

/**
 * @type {React.ForwardRefExoticComponent<TableProps & React.RefAttributes<HTMLTableElement>>}
 */
const Table = React.forwardRef(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
))
Table.displayName = "Table"

/**
 * @type {React.ForwardRefExoticComponent<TableSectionProps & React.RefAttributes<HTMLTableSectionElement>>}
 */
const TableHeader = React.forwardRef(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
))
TableHeader.displayName = "TableHeader"

/**
 * @type {React.ForwardRefExoticComponent<TableSectionProps & React.RefAttributes<HTMLTableSectionElement>>}
 */
const TableBody = React.forwardRef(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
))
TableBody.displayName = "TableBody"

/**
 * @type {React.ForwardRefExoticComponent<TableSectionProps & React.RefAttributes<HTMLTableSectionElement>>}
 */
const TableFooter = React.forwardRef(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    )}
    {...props}
  />
))
TableFooter.displayName = "TableFooter"

/**
 * @type {React.ForwardRefExoticComponent<TableRowProps & React.RefAttributes<HTMLTableRowElement>>}
 */
const TableRow = React.forwardRef(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    )}
    {...props}
  />
))
TableRow.displayName = "TableRow"

/**
 * @type {React.ForwardRefExoticComponent<TableHeadProps & React.RefAttributes<HTMLTableCellElement>>}
 */
const TableHead = React.forwardRef(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  />
))
TableHead.displayName = "TableHead"

/**
 * @type {React.ForwardRefExoticComponent<TableCellProps & React.RefAttributes<HTMLTableCellElement>>}
 */
const TableCell = React.forwardRef(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
    {...props}
  />
))
TableCell.displayName = "TableCell"

/**
 * @type {React.ForwardRefExoticComponent<TableCaptionProps & React.RefAttributes<HTMLTableCaptionElement>>}
 */
const TableCaption = React.forwardRef(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
))
TableCaption.displayName = "TableCaption"

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} 