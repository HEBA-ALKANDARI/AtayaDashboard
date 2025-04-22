export interface Orders {
    id: string;
    customer: string;
    amount: number;
    status: string;
    orderDate: string;
}

export const ORDERS: Orders[] = [
    { id: 'ORD-001', customer: 'Alice Smith', amount: 24, status: 'Completed', orderDate: '2025-04-01' },
    { id: 'ORD-002', customer: 'John Doe', amount: 18, status: 'Completed', orderDate: '2025-03-01' },
    { id: 'ORD-003', customer: 'Jane Cooper', amount: 31, status: 'Completed', orderDate: '2025-01-03' },
    { id: 'ORD-004', customer: 'Bob Martin', amount: 12, status: 'Completed', orderDate: '2025-03-05' },
    { id: 'ORD-005', customer: 'John Smith', amount: 14, status: 'Completed', orderDate: '2025-04-05' },
    { id: 'ORD-006', customer: 'Heba Martin', amount: 36, status: 'Cancelled', orderDate: '2025-02-07' },
    { id: 'ORD-007', customer: 'Sam Khalid', amount: 55, status: 'Completed', orderDate: '2025-01-07' },
    { id: 'ORD-008', customer: 'Tariq Ali', amount: 12, status: 'Completed', orderDate: '2025-02-10' },
    { id: 'ORD-009', customer: 'Ali Aziz', amount: 8, status: 'Completed', orderDate: '2025-01-10' },
    { id: 'ORD-010', customer: 'Fatma Ahmad', amount: 8, status: 'Completed', orderDate: '2025-04-12' }, 
    { id: 'ORD-011', customer: 'Zainab Ali', amount: 12, status: 'Cancelled', orderDate: '2025-01-15' },
    { id: 'ORD-012', customer: 'Raghad Martin', amount: 31, status: 'Completed', orderDate: '2025-01-15' },
    { id: 'ORD-013', customer: 'Dana Saad', amount: 30, status: 'Completed', orderDate: '2025-01-17' },
    { id: 'ORD-014', customer: 'Hassan Hussain', amount: 15, status: 'Completed', orderDate: '2025-01-17' },
    { id: 'ORD-015', customer: 'Heba Khalid', amount: 15, status: 'Completed', orderDate: '2025-01-17' },
    { id: 'ORD-016', customer: 'Layla Mansour', amount: 20, status: 'Completed', orderDate: '2025-01-20' },
    { id: 'ORD-017', customer: 'Omar Fathy', amount: 45, status: 'Completed', orderDate: '2025-03-20' },
    { id: 'ORD-018', customer: 'Nora Saleh', amount: 13, status: 'Completed', orderDate: '2025-03-23' },
    { id: 'ORD-019', customer: 'Yousef Ali', amount: 50, status: 'Cancelled', orderDate: '2025-01-23' },
    { id: 'ORD-020', customer: 'Mariam Hani', amount: 22, status: 'Completed', orderDate: '2025-01-25' },
    { id: 'ORD-021', customer: 'Khaled Yasin', amount: 34, status: 'Completed', orderDate: '2025-01-28' },
    { id: 'ORD-022', customer: 'Sara Hamad', amount: 28, status: 'Completed', orderDate: '2025-02-28' },
    { id: 'ORD-023', customer: 'Walid Omar', amount: 41, status: 'Completed', orderDate: '2025-03-02' },
    { id: 'ORD-024', customer: 'Aisha Farah', amount: 9, status: 'Completed', orderDate: '2025-02-02' },
    { id: 'ORD-025', customer: 'Hassan Ali', amount: 31, status: 'Completed', orderDate: '2025-02-02' },
    { id: 'ORD-026', customer: 'Faisal Al Mutairi', amount: 45, status: 'Completed', orderDate: '2025-02-07' },
    { id: 'ORD-027', customer: 'Rana Khalil', amount: 15, status: 'Completed', orderDate: '2025-02-07' },
    { id: 'ORD-028', customer: 'Amal Saleh', amount: 20, status: 'Completed', orderDate: '2025-02-11' },
    { id: 'ORD-029', customer: 'Yara Mansour', amount: 13, status: 'Completed', orderDate: '2025-01-11' },
    { id: 'ORD-030', customer: 'Badr Al Rashid', amount: 32, status: 'Completed', orderDate: '2025-02-15' },
    { id: 'ORD-031', customer: 'Nour Hasan', amount: 17, status: 'Completed', orderDate: '2025-02-18' },
    { id: 'ORD-032', customer: 'Omar Al Sabah', amount: 28, status: 'Completed', orderDate: '2025-02-18' },
    { id: 'ORD-033', customer: 'Huda Saeed', amount: 40, status: 'Completed', orderDate: '2025-04-21' },
    { id: 'ORD-034', customer: 'Rami Youssef', amount: 30, status: 'Completed', orderDate: '2025-02-21' },
    { id: 'ORD-035', customer: 'Sana Khaled', amount: 9, status: 'Completed', orderDate: '2025-02-21' },
    { id: 'ORD-036', customer: 'Mousa Ali', amount: 50, status: 'Completed', orderDate: '2025-04-25' },
    { id: 'ORD-037', customer: 'Salma Fathy', amount: 20, status: 'Cancelled', orderDate: '2025-02-25' },
    { id: 'ORD-038', customer: 'Fadi Hamad', amount: 10, status: 'Completed', orderDate: '2025-03-01' },
    { id: 'ORD-039', customer: 'Iman Ahmad', amount: 40, status: 'Completed', orderDate: '2025-04-01' },
    { id: 'ORD-040', customer: 'Zaid Hussein', amount: 10, status: 'Completed', orderDate: '2025-03-01' },
    { id: 'ORD-041', customer: 'Hana Khalid', amount: 8, status: 'Completed', orderDate: '2025-03-05' },
    { id: 'ORD-042', customer: 'Maha Al Sabah', amount: 40, status: 'Completed', orderDate: '2025-03-10' },
    { id: 'ORD-043', customer: 'Kareem Saad', amount: 30, status: 'Completed', orderDate: '2025-04-10' },
    { id: 'ORD-044', customer: 'Laila Ahmed', amount: 40, status: 'Completed', orderDate: '2025-03-15' },
    { id: 'ORD-045', customer: 'Tamer Fares', amount: 10, status: 'Completed', orderDate: '2025-03-15' },
    { id: 'ORD-046', customer: 'Alaa Rashed', amount: 20, status: 'Completed', orderDate: '2025-04-01' },
    { id: 'ORD-047', customer: 'Nada Omar', amount: 10, status: 'Pending', orderDate: '2025-04-20' },
    { id: 'ORD-048', customer: 'Khalil Youssef', amount: 30, status: 'OutOfDelivery', orderDate: '2025-04-21' },
    { id: 'ORD-049', customer: 'Dalia Salem', amount: 29, status: 'Cancelled', orderDate: '2025-04-21' },
    { id: 'ORD-050', customer: 'Zain Al Deen', amount: 34, status: 'Pending', orderDate: '2025-04-22' }
  ];
  
