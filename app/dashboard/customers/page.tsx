import { fetchFilteredCustomers } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";


export default async function Page(
    props: {
        searchParams?: Promise<{
            query?: string;
        }>
    }
) {
    const searchParams = await props?.searchParams;
    const customers = await fetchFilteredCustomers(searchParams?.query ?? "");
    return (
        <div>
            <CustomersTable customers={customers} />
        </div>
    )
}