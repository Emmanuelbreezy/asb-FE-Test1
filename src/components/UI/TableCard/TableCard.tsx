import React from 'react';
import { TableItem } from './TableItem';

type TableCardProps = {

}
export const TableCard = (props:TableCardProps) => {
    return(
        <div className="flex flex-col w-full bg-background-primary card-boxShadow">
               <div className="overflow-x-auto">
                   <table className="w-full">
                       <thead className="w-full bg-background-secondary">
                          <tr className="text-left">
                              <th scope="col" className="pt-2 pl-6 ">
                                    <input className="w-4 h-4 cursor-pointer text-background-neutral" type="checkbox" />
                              </th>
                              <th scope="col" className="py-3 pl-6"><span className="text-accent-20 text-xs font-medium uppercase tracking-wider">Name</span></th>
                              <th scope="col" className="py-3 pl-6"><span className="text-accent-20 text-xs font-medium uppercase tracking-wider">Location</span></th>
                              <th scope="col" className="py-3 pl-6"><span className="text-accent-20 text-xs font-medium uppercase tracking-wider">Status</span></th>
                              <th scope="col" className="py-3 pl-6"><span className="text-accent-20 text-xs font-medium uppercase tracking-wider">Entries</span></th>
                              <th scope="col" className="py-3 pl-6"><span className="text-accent-20 text-xs font-medium uppercase tracking-wider">Risk Profit</span></th>
                              <th scope="col" className="py-3 pl-6"></th>
                          </tr>
                       </thead>
                       <tbody className="w-full divide-y divide-gray-200">
                          <TableItem 
                                username={'Ib Thomas'} 
                                status={0}
                                entries={19}
                                entriesStatus={'Heterogenous'}
                                risk={'high'}
                                state={'Lagos State'}
                                street={'17 Odunjo Street'}
                          />
                          <TableItem 
                                username={'Jane Max'} 
                                status={3}
                                entries={10}
                                entriesStatus={'Homogenous'}
                                risk={'mid'}
                                state={'Kwara State'}
                                street={'9 Wale Street'}
                          />
                           <TableItem 
                                username={'Ib Thomas'} 
                                status={0}
                                entries={19}
                                entriesStatus={'Heterogenous'}
                                risk={'high'}
                                state={'Lagos State'}
                                street={'17 Odunjo Street'}
                          />
                           <TableItem 
                                username={'Sunday X'} 
                                status={1}
                                entries={5}
                                entriesStatus={'Homogenous'}
                                risk={'low'}
                                state={'Jos State'}
                                street={'9 Wale Street'}
                          />
                           <TableItem 
                                username={'Isreal Mon'} 
                                status={9}
                                entries={10}
                                entriesStatus={'Homogenous'}
                                risk={'mid'}
                                state={'Kwara State'}
                                street={'2 Wale Street'}
                          />
                       </tbody>
                   </table>
               </div>
        </div>
    )
}