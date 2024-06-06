"use client";

import styles from './pagination.module.css';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const Pagination = ({ count }) => {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();
    const page = parseInt(searchParams.get("page")) || 1;
    const ITEM_PER_PAGE = 2;
    
    const [currentPage, setCurrentPage] = useState(page);

    useEffect(() => {
        setCurrentPage(page);
    }, [page]);

    const hasPrev = ITEM_PER_PAGE * (currentPage - 1) > 0;
    const hasNext = ITEM_PER_PAGE * currentPage < count;

    const handleChangePage = (type) => {
        const newPage = type === "prev" ? currentPage - 1 : currentPage + 1;
        setCurrentPage(newPage);
        const params = new URLSearchParams(searchParams);
        params.set("page", newPage);
        replace(`${pathname}?${params}`);
    };

    return (
        <div className={styles.container}>
            <button className={styles.button} disabled={!hasPrev} onClick={() => handleChangePage("prev")}>Önceki Sayfa</button>
            <button className={styles.button} disabled={!hasNext} onClick={() => handleChangePage("next")}>Sonraki Sayfa</button>
        </div>
    );
};

export default Pagination;
