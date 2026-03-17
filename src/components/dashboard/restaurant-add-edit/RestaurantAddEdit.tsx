"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import RestaurantInfo from './RestaurantInfo'
import WorkingSchedule from './WorkingScdeule'
import OwnerInfo from './OwnerInfo'
import BankInformation from "./BankInformation";



export default function RestaurantAddEdit() {
    return (
        <Accordion type="single" collapsible defaultValue="restaurant-information" className="w-full">
            <AccordionItem value="restaurant-information">
                <AccordionTrigger className="text-base font-semibold">
                    Restaurant Information
                </AccordionTrigger>
                <AccordionContent>
                    <div className="pb-2 pt-1">
                        <RestaurantInfo />
                    </div>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="working-schedule">
                <AccordionTrigger className="text-base font-semibold">
                    Working Schedule
                </AccordionTrigger>
                <AccordionContent>
                    <div className="pb-2 pt-1">
                        <WorkingSchedule />
                    </div>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="owner-information">
                <AccordionTrigger className="text-base font-semibold">
                    Owner information
                </AccordionTrigger>
                <AccordionContent>
                    <div className="pb-2 pt-1">
                        <OwnerInfo />
                    </div>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="bank-information">
                <AccordionTrigger className="text-base font-semibold">
                    Bank Information
                </AccordionTrigger>
                <AccordionContent>
                    <div className="pb-2 pt-1">
                        <BankInformation />
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}
