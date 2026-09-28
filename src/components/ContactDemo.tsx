import { ContactCard } from "@/components/ui/contact-card";
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function ContactDemo() {
	return (
		<div className="relative flex min-h-screen w-full items-center justify-center px-4 py-10 md:px-8">
			<div className="mx-auto w-full max-w-5xl">
				<ContactCard
					className="overflow-hidden bg-white/5 text-white shadow-[0_24px_120px_rgba(57,20,71,0.32)] backdrop-blur-xl"
					formSectionClassName="border-white/10 bg-black/30"
					title="Get in touch"
					description="If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day."
					contactInfo={[
						{
							icon: MailIcon,
							label: 'Email',
							value: 'contact@praskla.com',
						},
						{
							icon: PhoneIcon,
							label: 'Phone',
							value: '+91 98765 43210',
						},
						{
							icon: MapPinIcon,
							label: 'Address',
							value: 'India, serving clients worldwide',
							className: 'col-span-2',
						}
					]}
				>
					<form className="w-full space-y-6 text-white">
						<div className="flex flex-col gap-3">
							<Label htmlFor="contact-name" className="text-white">Name</Label>
							<Input id="contact-name" name="name" type="text" placeholder="Your name" required className="bg-slate-950 border-white/10 text-white placeholder:text-slate-500" />
						</div>
						<div className="flex flex-col gap-3">
							<Label htmlFor="contact-email" className="text-white">Email</Label>
							<Input id="contact-email" name="email" type="email" placeholder="you@company.com" required className="bg-slate-950 border-white/10 text-white placeholder:text-slate-500" />
						</div>
						<div className="flex flex-col gap-3">
							<Label htmlFor="contact-phone" className="text-white">Phone</Label>
							<Input id="contact-phone" name="phone" type="tel" placeholder="+91 98765 43210" className="bg-slate-950 border-white/10 text-white placeholder:text-slate-500" />
						</div>
						<div className="flex flex-col gap-3">
							<Label htmlFor="contact-message" className="text-white">Message</Label>
							<Textarea id="contact-message" name="message" placeholder="Tell us about your project" required className="bg-slate-950 border-white/10 text-white placeholder:text-slate-500" />
						</div>
						<Button className="w-full rounded-xl bg-violet-600 text-white hover:bg-violet-500" type="submit">
							Send message
						</Button>
					</form>
				</ContactCard>
			</div>
		</div>
	);
}
