import React from 'react';
import{
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text
} from '@react-email/components'
import { Tailwind } from '@react-email/tailwind';   


type ContactFormEmailProps = {message:String; senderEmail:String};

export default function ContactFormEmail({
    message, senderEmail
}: ContactFormEmailProps) {

    return <Html>
        <Head />
        <Preview>New message from your portfolio site</Preview>
        <Tailwind>
            <Body className='bg-gray-100 text-black'>
                <Container>
                    <Section className='bg-white border boder-black/[0.7] my-10 px-10 rounded-md'>
                        <Heading className="leading-tight">Here is the message from the contact form</Heading>
                        <Hr />
                        <text>{message}</text>
                        <Hr />
                        <Text>The sender's email is: {senderEmail}</Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
 }