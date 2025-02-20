import { InputField, InputIcon, InputRoot } from "@/components/input";
import { Mail } from "lucide-react";

export default function Home() {
	return (
		<main>
			<div>
				<InputRoot>
					<InputIcon>
						<Mail className="size-5" />
					</InputIcon>
					<InputField />
				</InputRoot>
			</div>
		</main>
	);
}
