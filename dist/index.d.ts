import * as react from 'react';
import { ReactNode, CSSProperties } from 'react';
import { z } from 'zod';

/**
 * Data format for a fakewhats conversation.
 *
 * This file is the single source of truth: the TypeScript types are inferred
 * from these schemas and the public JSON Schema is generated from them.
 * Every field has a `.describe()` so an AI agent reading the types or the
 * JSON Schema knows exactly what to write.
 */
declare const MessageStatusSchema: z.ZodEnum<{
    pending: "pending";
    sent: "sent";
    delivered: "delivered";
    read: "read";
}>;
declare const TextMessageSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    from: z.ZodEnum<{
        me: "me";
        them: "them";
    }>;
    time: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        pending: "pending";
        sent: "sent";
        delivered: "delivered";
        read: "read";
    }>>;
    reply: z.ZodOptional<z.ZodObject<{
        author: z.ZodString;
        text: z.ZodString;
        image: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    reactions: z.ZodOptional<z.ZodArray<z.ZodString>>;
    forwarded: z.ZodOptional<z.ZodBoolean>;
    edited: z.ZodOptional<z.ZodBoolean>;
    starred: z.ZodOptional<z.ZodBoolean>;
    share: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodOptional<z.ZodLiteral<"text">>;
    text: z.ZodString;
    preview: z.ZodOptional<z.ZodObject<{
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        domain: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
declare const ImageMessageSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    from: z.ZodEnum<{
        me: "me";
        them: "them";
    }>;
    time: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        pending: "pending";
        sent: "sent";
        delivered: "delivered";
        read: "read";
    }>>;
    reply: z.ZodOptional<z.ZodObject<{
        author: z.ZodString;
        text: z.ZodString;
        image: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    reactions: z.ZodOptional<z.ZodArray<z.ZodString>>;
    forwarded: z.ZodOptional<z.ZodBoolean>;
    edited: z.ZodOptional<z.ZodBoolean>;
    starred: z.ZodOptional<z.ZodBoolean>;
    share: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<"image">;
    src: z.ZodString;
    caption: z.ZodOptional<z.ZodString>;
    aspectRatio: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
declare const AudioMessageSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    from: z.ZodEnum<{
        me: "me";
        them: "them";
    }>;
    time: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        pending: "pending";
        sent: "sent";
        delivered: "delivered";
        read: "read";
    }>>;
    reply: z.ZodOptional<z.ZodObject<{
        author: z.ZodString;
        text: z.ZodString;
        image: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    reactions: z.ZodOptional<z.ZodArray<z.ZodString>>;
    forwarded: z.ZodOptional<z.ZodBoolean>;
    edited: z.ZodOptional<z.ZodBoolean>;
    starred: z.ZodOptional<z.ZodBoolean>;
    share: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<"audio">;
    duration: z.ZodString;
    played: z.ZodOptional<z.ZodBoolean>;
    progress: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
declare const ButtonsMessageSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    from: z.ZodEnum<{
        me: "me";
        them: "them";
    }>;
    time: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        pending: "pending";
        sent: "sent";
        delivered: "delivered";
        read: "read";
    }>>;
    reply: z.ZodOptional<z.ZodObject<{
        author: z.ZodString;
        text: z.ZodString;
        image: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    reactions: z.ZodOptional<z.ZodArray<z.ZodString>>;
    forwarded: z.ZodOptional<z.ZodBoolean>;
    edited: z.ZodOptional<z.ZodBoolean>;
    starred: z.ZodOptional<z.ZodBoolean>;
    share: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<"buttons">;
    header: z.ZodOptional<z.ZodString>;
    text: z.ZodString;
    footer: z.ZodOptional<z.ZodString>;
    buttons: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
declare const ListMessageSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    from: z.ZodEnum<{
        me: "me";
        them: "them";
    }>;
    time: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        pending: "pending";
        sent: "sent";
        delivered: "delivered";
        read: "read";
    }>>;
    reply: z.ZodOptional<z.ZodObject<{
        author: z.ZodString;
        text: z.ZodString;
        image: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    reactions: z.ZodOptional<z.ZodArray<z.ZodString>>;
    forwarded: z.ZodOptional<z.ZodBoolean>;
    edited: z.ZodOptional<z.ZodBoolean>;
    starred: z.ZodOptional<z.ZodBoolean>;
    share: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<"list">;
    header: z.ZodOptional<z.ZodString>;
    text: z.ZodString;
    footer: z.ZodOptional<z.ZodString>;
    buttonLabel: z.ZodString;
    sections: z.ZodOptional<z.ZodArray<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        rows: z.ZodArray<z.ZodObject<{
            title: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    open: z.ZodOptional<z.ZodBoolean>;
    selected: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
declare const DateMessageSchema: z.ZodObject<{
    type: z.ZodLiteral<"date">;
    text: z.ZodString;
}, z.core.$strip>;
declare const SystemMessageSchema: z.ZodObject<{
    type: z.ZodLiteral<"system">;
    text: z.ZodString;
}, z.core.$strip>;
declare const UnreadMessageSchema: z.ZodObject<{
    type: z.ZodLiteral<"unread">;
    text: z.ZodString;
}, z.core.$strip>;
declare const MessageSchema: z.ZodUnion<readonly [z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    from: z.ZodEnum<{
        me: "me";
        them: "them";
    }>;
    time: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        pending: "pending";
        sent: "sent";
        delivered: "delivered";
        read: "read";
    }>>;
    reply: z.ZodOptional<z.ZodObject<{
        author: z.ZodString;
        text: z.ZodString;
        image: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    reactions: z.ZodOptional<z.ZodArray<z.ZodString>>;
    forwarded: z.ZodOptional<z.ZodBoolean>;
    edited: z.ZodOptional<z.ZodBoolean>;
    starred: z.ZodOptional<z.ZodBoolean>;
    share: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodOptional<z.ZodLiteral<"text">>;
    text: z.ZodString;
    preview: z.ZodOptional<z.ZodObject<{
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        domain: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    from: z.ZodEnum<{
        me: "me";
        them: "them";
    }>;
    time: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        pending: "pending";
        sent: "sent";
        delivered: "delivered";
        read: "read";
    }>>;
    reply: z.ZodOptional<z.ZodObject<{
        author: z.ZodString;
        text: z.ZodString;
        image: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    reactions: z.ZodOptional<z.ZodArray<z.ZodString>>;
    forwarded: z.ZodOptional<z.ZodBoolean>;
    edited: z.ZodOptional<z.ZodBoolean>;
    starred: z.ZodOptional<z.ZodBoolean>;
    share: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<"image">;
    src: z.ZodString;
    caption: z.ZodOptional<z.ZodString>;
    aspectRatio: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    from: z.ZodEnum<{
        me: "me";
        them: "them";
    }>;
    time: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        pending: "pending";
        sent: "sent";
        delivered: "delivered";
        read: "read";
    }>>;
    reply: z.ZodOptional<z.ZodObject<{
        author: z.ZodString;
        text: z.ZodString;
        image: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    reactions: z.ZodOptional<z.ZodArray<z.ZodString>>;
    forwarded: z.ZodOptional<z.ZodBoolean>;
    edited: z.ZodOptional<z.ZodBoolean>;
    starred: z.ZodOptional<z.ZodBoolean>;
    share: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<"audio">;
    duration: z.ZodString;
    played: z.ZodOptional<z.ZodBoolean>;
    progress: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    from: z.ZodEnum<{
        me: "me";
        them: "them";
    }>;
    time: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        pending: "pending";
        sent: "sent";
        delivered: "delivered";
        read: "read";
    }>>;
    reply: z.ZodOptional<z.ZodObject<{
        author: z.ZodString;
        text: z.ZodString;
        image: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    reactions: z.ZodOptional<z.ZodArray<z.ZodString>>;
    forwarded: z.ZodOptional<z.ZodBoolean>;
    edited: z.ZodOptional<z.ZodBoolean>;
    starred: z.ZodOptional<z.ZodBoolean>;
    share: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<"buttons">;
    header: z.ZodOptional<z.ZodString>;
    text: z.ZodString;
    footer: z.ZodOptional<z.ZodString>;
    buttons: z.ZodArray<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    from: z.ZodEnum<{
        me: "me";
        them: "them";
    }>;
    time: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        pending: "pending";
        sent: "sent";
        delivered: "delivered";
        read: "read";
    }>>;
    reply: z.ZodOptional<z.ZodObject<{
        author: z.ZodString;
        text: z.ZodString;
        image: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    reactions: z.ZodOptional<z.ZodArray<z.ZodString>>;
    forwarded: z.ZodOptional<z.ZodBoolean>;
    edited: z.ZodOptional<z.ZodBoolean>;
    starred: z.ZodOptional<z.ZodBoolean>;
    share: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<"list">;
    header: z.ZodOptional<z.ZodString>;
    text: z.ZodString;
    footer: z.ZodOptional<z.ZodString>;
    buttonLabel: z.ZodString;
    sections: z.ZodOptional<z.ZodArray<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        rows: z.ZodArray<z.ZodObject<{
            title: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    open: z.ZodOptional<z.ZodBoolean>;
    selected: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"date">;
    text: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"system">;
    text: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"unread">;
    text: z.ZodString;
}, z.core.$strip>]>;
declare const ContactSchema: z.ZodObject<{
    name: z.ZodString;
    avatar: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodString>;
    verified: z.ZodOptional<z.ZodBoolean>;
    story: z.ZodOptional<z.ZodEnum<{
        new: "new";
        seen: "seen";
    }>>;
    business: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
declare const ConversationSchema: z.ZodObject<{
    $schema: z.ZodOptional<z.ZodString>;
    contact: z.ZodObject<{
        name: z.ZodString;
        avatar: z.ZodOptional<z.ZodString>;
        status: z.ZodOptional<z.ZodString>;
        verified: z.ZodOptional<z.ZodBoolean>;
        story: z.ZodOptional<z.ZodEnum<{
            new: "new";
            seen: "seen";
        }>>;
        business: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>;
    messages: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        from: z.ZodEnum<{
            me: "me";
            them: "them";
        }>;
        time: z.ZodOptional<z.ZodString>;
        status: z.ZodOptional<z.ZodEnum<{
            pending: "pending";
            sent: "sent";
            delivered: "delivered";
            read: "read";
        }>>;
        reply: z.ZodOptional<z.ZodObject<{
            author: z.ZodString;
            text: z.ZodString;
            image: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        reactions: z.ZodOptional<z.ZodArray<z.ZodString>>;
        forwarded: z.ZodOptional<z.ZodBoolean>;
        edited: z.ZodOptional<z.ZodBoolean>;
        starred: z.ZodOptional<z.ZodBoolean>;
        share: z.ZodOptional<z.ZodBoolean>;
        type: z.ZodOptional<z.ZodLiteral<"text">>;
        text: z.ZodString;
        preview: z.ZodOptional<z.ZodObject<{
            title: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            domain: z.ZodOptional<z.ZodString>;
            image: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>, z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        from: z.ZodEnum<{
            me: "me";
            them: "them";
        }>;
        time: z.ZodOptional<z.ZodString>;
        status: z.ZodOptional<z.ZodEnum<{
            pending: "pending";
            sent: "sent";
            delivered: "delivered";
            read: "read";
        }>>;
        reply: z.ZodOptional<z.ZodObject<{
            author: z.ZodString;
            text: z.ZodString;
            image: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        reactions: z.ZodOptional<z.ZodArray<z.ZodString>>;
        forwarded: z.ZodOptional<z.ZodBoolean>;
        edited: z.ZodOptional<z.ZodBoolean>;
        starred: z.ZodOptional<z.ZodBoolean>;
        share: z.ZodOptional<z.ZodBoolean>;
        type: z.ZodLiteral<"image">;
        src: z.ZodString;
        caption: z.ZodOptional<z.ZodString>;
        aspectRatio: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>, z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        from: z.ZodEnum<{
            me: "me";
            them: "them";
        }>;
        time: z.ZodOptional<z.ZodString>;
        status: z.ZodOptional<z.ZodEnum<{
            pending: "pending";
            sent: "sent";
            delivered: "delivered";
            read: "read";
        }>>;
        reply: z.ZodOptional<z.ZodObject<{
            author: z.ZodString;
            text: z.ZodString;
            image: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        reactions: z.ZodOptional<z.ZodArray<z.ZodString>>;
        forwarded: z.ZodOptional<z.ZodBoolean>;
        edited: z.ZodOptional<z.ZodBoolean>;
        starred: z.ZodOptional<z.ZodBoolean>;
        share: z.ZodOptional<z.ZodBoolean>;
        type: z.ZodLiteral<"audio">;
        duration: z.ZodString;
        played: z.ZodOptional<z.ZodBoolean>;
        progress: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>, z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        from: z.ZodEnum<{
            me: "me";
            them: "them";
        }>;
        time: z.ZodOptional<z.ZodString>;
        status: z.ZodOptional<z.ZodEnum<{
            pending: "pending";
            sent: "sent";
            delivered: "delivered";
            read: "read";
        }>>;
        reply: z.ZodOptional<z.ZodObject<{
            author: z.ZodString;
            text: z.ZodString;
            image: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        reactions: z.ZodOptional<z.ZodArray<z.ZodString>>;
        forwarded: z.ZodOptional<z.ZodBoolean>;
        edited: z.ZodOptional<z.ZodBoolean>;
        starred: z.ZodOptional<z.ZodBoolean>;
        share: z.ZodOptional<z.ZodBoolean>;
        type: z.ZodLiteral<"buttons">;
        header: z.ZodOptional<z.ZodString>;
        text: z.ZodString;
        footer: z.ZodOptional<z.ZodString>;
        buttons: z.ZodArray<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        from: z.ZodEnum<{
            me: "me";
            them: "them";
        }>;
        time: z.ZodOptional<z.ZodString>;
        status: z.ZodOptional<z.ZodEnum<{
            pending: "pending";
            sent: "sent";
            delivered: "delivered";
            read: "read";
        }>>;
        reply: z.ZodOptional<z.ZodObject<{
            author: z.ZodString;
            text: z.ZodString;
            image: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        reactions: z.ZodOptional<z.ZodArray<z.ZodString>>;
        forwarded: z.ZodOptional<z.ZodBoolean>;
        edited: z.ZodOptional<z.ZodBoolean>;
        starred: z.ZodOptional<z.ZodBoolean>;
        share: z.ZodOptional<z.ZodBoolean>;
        type: z.ZodLiteral<"list">;
        header: z.ZodOptional<z.ZodString>;
        text: z.ZodString;
        footer: z.ZodOptional<z.ZodString>;
        buttonLabel: z.ZodString;
        sections: z.ZodOptional<z.ZodArray<z.ZodObject<{
            title: z.ZodOptional<z.ZodString>;
            rows: z.ZodArray<z.ZodObject<{
                title: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>>>;
        open: z.ZodOptional<z.ZodBoolean>;
        selected: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"date">;
        text: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"system">;
        text: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"unread">;
        text: z.ZodString;
    }, z.core.$strip>]>>;
    pinned: z.ZodOptional<z.ZodObject<{
        text: z.ZodString;
        total: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    draft: z.ZodOptional<z.ZodString>;
    scrollButton: z.ZodOptional<z.ZodBoolean>;
    unreadCount: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
type MessageStatus = z.infer<typeof MessageStatusSchema>;
type TextMessage = z.infer<typeof TextMessageSchema>;
type ImageMessage = z.infer<typeof ImageMessageSchema>;
type AudioMessage = z.infer<typeof AudioMessageSchema>;
type ButtonsMessage = z.infer<typeof ButtonsMessageSchema>;
type ListMessage = z.infer<typeof ListMessageSchema>;
type DateMessage = z.infer<typeof DateMessageSchema>;
type SystemMessage = z.infer<typeof SystemMessageSchema>;
type UnreadMessage = z.infer<typeof UnreadMessageSchema>;
type Message = z.infer<typeof MessageSchema>;
type BubbleMessage = Exclude<Message, DateMessage | SystemMessage | UnreadMessage>;
type Contact = z.infer<typeof ContactSchema>;
type Conversation = z.infer<typeof ConversationSchema>;

declare function ChatHeader({ contact, unreadCount }: {
    contact: Contact;
    unreadCount?: number;
}): react.JSX.Element;
/** `safeArea` adds the iPhone home-indicator space under the input (on when the status bar is shown). */
declare function ChatComposer({ draft, safeArea }: {
    draft?: string;
    safeArea?: boolean;
}): react.JSX.Element;
type StatusBarOptions = {
    /** Clock text. Default "9:41". */
    time?: string;
    /** Battery level from 0 to 1. Default 0.8. */
    battery?: number;
    /** iOS: write the percentage inside the battery. Default true. */
    batteryPercent?: boolean;
    /** Signal bars from 0 to 4. Default 4. */
    signal?: number;
    /** Show the wifi icon. Default true (hidden when `network` is set). */
    wifi?: boolean;
    /** Cellular label shown instead of wifi, e.g. "5G" or "LTE". */
    network?: string;
    /** iOS: moon icon next to the clock (Focus / Do Not Disturb). Default false. */
    focus?: boolean;
    /** iOS: wifi strength from 1 to 3 arcs. Default 3. */
    wifiBars?: number;
    /** iOS: dual-SIM signal icon (bars on top, dots below). Set to the second line's strength, 0 to 4. */
    dualSim?: number;
    /** iOS: notch phone layout (iPhone X to 14): 44pt tall bar with the clock further left. Default: Dynamic Island. */
    notch?: boolean;
    /** iOS: charging battery (green with a bolt). Default false. */
    charging?: boolean;
    /** iOS: the home indicator bar at the bottom of the screen. Default true. */
    homeIndicator?: boolean;
    /** Android: the 3-button navigation bar at the bottom of the screen. Default true. */
    navBar?: boolean;
};
declare function StatusBar({ time, battery, batteryPercent, signal, wifi, network, focus, wifiBars, dualSim, notch, charging, }: StatusBarOptions): react.JSX.Element;
declare function PhoneFrame({ children }: {
    children: ReactNode;
}): react.JSX.Element;
/** The options sheet of a list message, drawn open over the chat. */
declare function ListSheet({ message }: {
    message: ListMessage;
}): react.JSX.Element;

type Variant = "ios" | "android";
type Theme = "light" | "dark";
type Locale = "en" | "pt" | "es";
type Wallpaper = "doodle" | "none" | (string & {});
declare function themeStyle(variant: Variant, theme: Theme, wallpaper?: Wallpaper): CSSProperties;
declare const strings: {
    en: {
        placeholder: string;
        forwarded: string;
        edited: string;
        you: string;
    };
    pt: {
        placeholder: string;
        forwarded: string;
        edited: string;
        you: string;
    };
    es: {
        placeholder: string;
        forwarded: string;
        edited: string;
        you: string;
    };
};
type Strings = (typeof strings)["en"];
/** WhatsApp's own "Chat font size" setting (Settings → Chats). */
type TextSize = "small" | "medium" | "large";
type TextMetrics = {
    /** Message text size and line height, px. */
    size: number;
    line: number;
    /** iOS bubble padding above and below the text, px. */
    padTop: number;
    padBottom: number;
    /** How far the time drops below the last line (iOS), px. */
    timeDrop: number;
};
type ChatContextValue = {
    variant: Variant;
    theme: Theme;
    wallpaper: Wallpaper;
    text: TextMetrics;
    t: Strings;
};
/**
 * Provides variant/theme/locale to the pieces inside and renders the root
 * element that carries the --wa-* color variables.
 */
declare function ChatProvider({ variant, theme, locale, wallpaper, textSize, className, style, children, }: {
    variant?: Variant;
    theme?: Theme;
    locale?: Locale;
    /** "doodle" (default), "none" for a plain color, or an image URL. */
    wallpaper?: Wallpaper;
    /** WhatsApp's chat font size setting. Default "medium". */
    textSize?: TextSize;
    className?: string;
    style?: CSSProperties;
    children: React.ReactNode;
}): react.JSX.Element;
declare function useChat(): ChatContextValue;

declare function Bubble({ message, tail, className, style, children, }: {
    message: BubbleMessage;
    tail?: boolean;
    className?: string;
    style?: CSSProperties;
    children: ReactNode;
}): react.JSX.Element;
/**
 * One message, positioned on its side. `first`/`last` say where it sits in a
 * run of consecutive messages from the same sender (tails and spacing depend on it).
 */
declare function MessageRow({ message, first, last, }: {
    message: Message;
    first?: boolean;
    last?: boolean;
}): react.JSX.Element;

declare function FormattedText({ text }: {
    text: string;
}): react.JSX.Element;

type WhatsAppChatProps = {
    /** The conversation to render. See `Conversation` in ./schema. */
    data: Conversation;
    /** Look of the app. Default "ios". */
    variant?: Variant;
    /** Color scheme. Default "light". */
    theme?: Theme;
    /** Language of the built-in labels ("Message", "Forwarded"...). Default "en". */
    locale?: Locale;
    /** Chat background: "doodle" (default), "none" for a plain color, or an image URL. */
    wallpaper?: Wallpaper;
    /** WhatsApp's chat font size setting (Settings → Chats → Font size). Default "medium". */
    textSize?: TextSize;
    /** Draw a phone around the chat (fixed size: 390×844 on iOS, 396×860 on Android). Default false. */
    frame?: boolean;
    /** Show the phone status bar. `true` or options. Default: shown when `frame` is on. */
    statusBar?: boolean | StatusBarOptions;
    className?: string;
    style?: CSSProperties;
};
/**
 * The scrollable list of messages, grouped into runs by sender. Starts scrolled to the bottom.
 * `topInset` is the height of a header drawn over the list (iOS), so content can scroll under it.
 */
declare function MessageList({ messages, topInset }: {
    messages: Message[];
    topInset?: number;
}): react.JSX.Element;
/**
 * A static, fake WhatsApp chat screen.
 *
 * ```tsx
 * <WhatsAppChat
 *   variant="android"
 *   theme="dark"
 *   frame
 *   data={{
 *     contact: { name: "Ana", status: "online" },
 *     messages: [
 *       { from: "them", text: "Hi! 👋", time: "10:41" },
 *       { from: "me", text: "Hey *Ana*", time: "10:42", status: "read" },
 *     ],
 *   }}
 * />
 * ```
 */
declare function WhatsAppChat({ data, variant, theme, locale, wallpaper, textSize, frame, statusBar, className, style, }: WhatsAppChatProps): react.JSX.Element;

export { type AudioMessage, Bubble, type ButtonsMessage, ChatComposer, ChatHeader, ChatProvider, type Contact, type Conversation, ConversationSchema, FormattedText, type ImageMessage, type ListMessage, ListSheet, type Locale, type Message, MessageList, MessageRow, type MessageStatus, PhoneFrame, StatusBar, type StatusBarOptions, type TextMessage, type TextSize, type Theme, type Variant, type Wallpaper, WhatsAppChat, themeStyle, useChat };
