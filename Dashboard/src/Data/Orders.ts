export interface Orders {
    id: string;
    customer: string;
    amount: number;
    status: string;
}

export const ORDERS: Orders[] =
[
    { id: 'ORD-001', customer: 'Alice Smith', amount: 240, status: 'Completed' },
    { id: 'ORD-002', customer: 'John Doe', amount: 180, status: 'Pending' },
    { id: 'ORD-003', customer: 'Jane Cooper', amount: 310, status: 'Cancelled' },
    { id: 'ORD-004', customer: 'Bob Martin', amount: 120, status: 'Completed' },
    { id: 'ORD-005', customer: 'John Smith', amount: 140, status: 'OutOfDelivery' },
    { id: 'ORD-006', customer: 'Heba Martin', amount: 360, status: 'Pending' },
    { id: 'ORD-007', customer: 'Sam Khalid', amount: 550, status: 'Pending' },
    { id: 'ORD-008', customer: 'Tariq Ali', amount: 120, status: 'Completed' },
    { id: 'ORD-009', customer: 'Ali Aziz', amount: 80, status: 'Completed' },
    { id: 'ORD-010', customer: 'Fatma Ahmad', amount: 80, status: 'OutOfDelivery' },
    { id: 'ORD-011', customer: 'Zainab Ali', amount: 120, status: 'Completed' },
    { id: 'ORD-012', customer: 'Raghad Martin', amount: 310, status: 'Completed' },
    { id: 'ORD-013', customer: 'Dana Saad', amount: 300, status: 'Cancelled' },
    { id: 'ORD-014', customer: 'Hassan Hussain', amount: 150, status: 'OutOfDelivery' },
    { id: 'ORD-015', customer: 'Heba Khalid', amount: 50, status: 'Cancelled' },
];