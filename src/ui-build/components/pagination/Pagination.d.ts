/// <reference types="react" />
export interface PaginationProps {
    itemsPerPage?: number[];
    perPage: number;
    total: number;
    currentPage: number;
    hidePageSize: boolean;
    onPageChange(pageNumber: number): void;
    onPageSizeChange?(pageSize: number): void;
}
/**
 * Display the Pagination for Page.
 *
 * @see https://dataflowgroup.invisionapp.com/console/share/QP35Y5IZBE/496553062
 * @example
 * <Pagination
 *   total={totalItems}
 *   currentPage={currentPage}
 *   perPage={perPage}
 *   onPageChange={handlePageChange}
 *   onPageSizeChange={handlePageSizeChange}
 * />
 */
export declare const Pagination: ({ itemsPerPage, perPage, total, currentPage, hidePageSize, onPageChange, onPageSizeChange, }: PaginationProps) => JSX.Element | null;
