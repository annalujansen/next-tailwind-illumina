"use client";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "../../../../../components/ui/form";
import { Input } from "../../../../../components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../../../../components/ui/select";
import { Textarea } from "../../../../../components/ui/textarea";
import { Button } from "../../../../../components/ui/button";

const phoneRegex = new RegExp(
    /^(\+1\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/
);

const formEmailSchema = z.object({
    name: z.string({ required_error: "Please enter your name." }).min(2, {
        message: "Name must be at least 2 characters long.",
    }),
    email: z
        .string({ required_error: "Please enter your email." })
        .min(1, { message: "Please enter your email." })
        .email("Invalid email address."),
    phone: z
        .string({ required_error: "Please enter your phone number." })
        .regex(phoneRegex, "Invalid phone number."),
    servico: z.string({
        required_error: "Please select a service type.",
    }),
    description: z
        .string({ required_error: "Please provide a brief project description." })
        .min(4, { message: "Description must be at least 4 characters long." }),
});

type FormEmailValues = z.infer<typeof formEmailSchema>;

const FormEmail = () => {
    const form = useForm<FormEmailValues>({
        resolver: zodResolver(formEmailSchema),
        mode: "onChange",
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            description: "",
        },
    });

    const [loading, setLoading] = useState(false);

    useEffect(
        () => emailjs.init(process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY ?? ""),
        [],
    );

    const handleSubmit = async (data: FormEmailValues) => {
        const serviceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID ?? "";
        const templateId = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID ?? "";
        try {
            setLoading(true);
            await emailjs.send(serviceId, templateId, {
                name: data.name,
                email: data.email,
                telephone: data.phone,
                service: data.servico,
                description: data.description,
            });
            toast.success("Request sent!", {
                style: {
                    color: "#081426",
                    background: "#F8F8FF",
                },
            });
        } catch (error) {
            toast.error("Error sending request", {
                style: {
                    color: "#081426",
                    background: "#F8F8FF",
                },
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="font-nunito"
                    >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem className="space-y-0 sm:mt-4 sm:space-y-1">
                                <FormLabel className="mb-0 text-[10px] sm:mb-1 sm:text-base">
                                    Name
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Enter your name"
                                        className="h-6 space-y-0 border-none bg-fundo-2/75 px-2 text-[10px] text-color-7 focus:outline-none focus:ring sm:h-10 sm:px-3 sm:text-sm"
                                        {...field}
                                        required
                                        />
                                </FormControl>
                            </FormItem>
                        )}
                        />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="mt-1 space-y-0 sm:mt-3 sm:space-y-1">
                                <FormLabel className="text-[10px] sm:text-base">
                                    Email
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Enter your email"
                                        type="email"
                                        className="mt-0 h-6 space-y-0 border-none bg-fundo-2/75 px-2 text-[10px] text-color-7 focus:outline-none focus:ring sm:mt-1 sm:h-10 sm:px-3 sm:text-sm"
                                        {...field}
                                        required
                                        />
                                </FormControl>
                            </FormItem>
                        )}
                        />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem className="mt-1 space-y-0 sm:mt-3 sm:space-y-1">
                                <FormLabel className="text-[10px] sm:text-base">
                                    Phone
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="(123) 456-7890"
                                        type="tel"
                                        className="mt-0 h-6 space-y-0 border-none bg-fundo-2/75 px-2 text-[10px] text-color-7 focus:outline-none focus:ring sm:mt-1 sm:h-10 sm:px-3 sm:text-sm"
                                        {...field}
                                        required
                                        />
                                </FormControl>
                            </FormItem>
                        )}
                        />
                    <FormField
                        control={form.control}
                        name="servico"
                        render={() => (
                            <FormItem className="mt-1 space-y-0 sm:mt-3 sm:space-y-1">
                                <FormLabel className="text-[10px] sm:text-base">
                                    Service
                                </FormLabel>
                                <Select
                                    onValueChange={(value) => form.setValue("servico", value)}
                                    required
                                    >
                                    <FormControl>
                                        <SelectTrigger className="h-6 border-none bg-fundo-2/75 px-2 text-[10px] text-color-7/80 sm:mt-1 sm:h-10 sm:px-3 sm:text-sm">
                                            <SelectValue placeholder="Select a service type" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="border-none bg-fundo-2/75 font-nunito text-color-7">
                                        <SelectItem
                                            className="text-[10px] font-semibold hover:font-bold sm:text-sm"
                                            value="Website"
                                            >
                                            Contract Formation
                                        </SelectItem>
                                        <SelectItem
                                            className="text-[10px] font-semibold hover:font-bold sm:text-sm"
                                            value="Web Service"
                                        >
                                            Contract Execution Management
                                        </SelectItem>
                                        <SelectItem
                                            className="text-[10px] font-semibold hover:font-bold sm:text-sm"
                                            value="App"
                                        >
                                            Claims & Delay Analysis
                                        </SelectItem>
                                        <SelectItem
                                            className="text-[10px] font-semibold hover:font-bold sm:text-sm"
                                            value="Consulting"
                                        >
                                            Document Management                                        </SelectItem>
                                        <SelectItem
                                            className="text-[10px] font-semibold hover:font-bold sm:text-sm"
                                            value="Consulting"
                                        >
                                            Negotiation & Compliance
                                        </SelectItem>
                                        <SelectItem
                                            className="text-[10px] font-semibold hover:font-bold sm:text-sm"
                                            value="Consulting"
                                        >
                                            O&M Support & Governance
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem className="mt-1 space-y-0 sm:mt-3 sm:space-y-1">
                                <FormLabel className="text-[10px] sm:text-base">
                                    Description
                                </FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Briefly describe your project"
                                        className="mt-1 min-h-[40px] resize-none border-none bg-fundo-2/75 px-2 text-[10px] text-color-7 focus:outline-none sm:min-h-[80px] sm:px-3 sm:text-sm"
                                        {...field}
                                        required
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <div className="my-3 flex justify-end sm:my-4">
                        <Button
                            type="submit"
                            disabled={loading}
                            className="h-6 bg-fundo-3 px-3 py-1 font-oxanium text-[12px] font-bold text-color-7 transition ease-in-out hover:bg-fundo-1 hover:text-color-1 active:border-none sm:h-11 sm:rounded-md sm:px-6 sm:text-[20px]"
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </Form>
            <Toaster
                position="bottom-left"
                reverseOrder={false}
                containerStyle={{
                    left: 24,
                    bottom: 28,
                }}
            />
        </>
    );
};

export default FormEmail;