import { BlogPost, BlogCategory } from '@/types/blog';

export const blogCategories: BlogCategory[] = [
  {
    id: '1',
    name: 'AI Scams & Threats',
    slug: 'ai-scams',
    description: 'Understanding AI-powered scams and how to protect yourself',
    color: 'bg-red-500',
    icon: 'Bot'
  },
  {
    id: '2',
    name: 'Email Security',
    slug: 'email-security',
    description: 'Safe email practices and phishing prevention',
    color: 'bg-blue-500',
    icon: 'Mail'
  },
  {
    id: '3',
    name: 'Online Shopping Safety',
    slug: 'shopping-safety',
    description: 'Secure online shopping and payment protection',
    color: 'bg-green-500',
    icon: 'ShoppingCart'
  },
  {
    id: '4',
    name: 'Social Media Security',
    slug: 'social-media',
    description: 'Protecting your privacy on social platforms',
    color: 'bg-purple-500',
    icon: 'Users'
  },
  {
    id: '5',
    name: 'Password Protection',
    slug: 'passwords',
    description: 'Creating and managing secure passwords',
    color: 'bg-orange-500',
    icon: 'Lock'
  },
  {
    id: '6',
    name: 'Device Security',
    slug: 'device-security',
    description: 'Keeping your devices safe and updated',
    color: 'bg-teal-500',
    icon: 'Smartphone'
  }
];

export const sampleBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How AI Voice Cloning Scams Target Seniors: What You Need to Know',
    slug: 'ai-voice-cloning-scams-seniors',
    excerpt: 'Learn how scammers use AI to clone voices and trick people into sending money, plus simple steps to protect yourself and your loved ones.',
    content: `
# How AI Voice Cloning Scams Target Seniors: What You Need to Know

Artificial Intelligence has brought many wonderful advances, but unfortunately, criminals are also using this technology in new and dangerous ways. One of the most concerning trends is AI voice cloning scams, where criminals use technology to copy someone's voice and trick their family members.

## What Is Voice Cloning?

Voice cloning technology can copy anyone's voice using just a few seconds of audio. Scammers often get this audio from:
- Social media videos
- Voicemail messages
- Phone calls
- Public recordings

Once they have enough audio, they can make the cloned voice say anything they want.

## How the Scam Works

Here's a typical scenario:

1. **The Setup**: You receive a phone call that sounds exactly like your grandchild, child, or close family member
2. **The Crisis**: The caller claims to be in trouble - arrested, in an accident, or stranded somewhere
3. **The Urgency**: They say they need money immediately and ask you not to tell anyone
4. **The Request**: They ask you to send money via wire transfer, gift cards, or cryptocurrency

## Red Flags to Watch For

- **Unusual requests for money**: Even if the voice sounds familiar, be suspicious of urgent money requests
- **"Don't tell anyone"**: Legitimate emergencies rarely require secrecy
- **Background noise or poor call quality**: This might hide imperfections in the cloned voice
- **Avoiding video calls**: Scammers can clone voices but not appearances
- **Pressure to act quickly**: Scammers create urgency to prevent you from thinking clearly

## How to Protect Yourself

### Verification Steps
1. **Hang up and call back**: Use a number you know is correct
2. **Ask personal questions**: Ask about something only the real person would know
3. **Contact other family members**: Verify the person's whereabouts through someone else
4. **Trust your instincts**: If something feels wrong, it probably is

### Prevention Strategies
- **Limit social media sharing**: Be cautious about posting videos with clear audio
- **Create a family code word**: Establish a secret word that only family members know
- **Educate your family**: Make sure everyone knows about these scams
- **Be skeptical of urgent requests**: Take time to verify before sending money

## What to Do If You're Targeted

1. **Don't panic**: Take a deep breath and think clearly
2. **Don't send money**: Never send money based on a phone call alone
3. **Document the call**: Write down the number, time, and what was said
4. **Report it**: Contact local police and the Federal Trade Commission (FTC)

## Teaching Moments for Families

This is an important conversation to have with your entire family:
- Discuss these scams openly
- Share this information with friends and neighbors
- Practice verification steps
- Make sure everyone knows they can always double-check suspicious calls

## Remember: It's Okay to Be Suspicious

You won't hurt anyone's feelings by verifying their identity. Real family members will understand your caution, especially when money is involved.

## Stay Informed

Technology evolves quickly, and so do scams. Stay informed by:
- Following trusted cybersecurity resources
- Discussing new threats with family
- Reporting suspicious activity to authorities

Your awareness and caution are your best defenses against these sophisticated scams.
    `,
    author: {
      name: 'Dr. Sarah Chen',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      bio: 'Cybersecurity expert specializing in senior safety and digital literacy'
    },
    publishedAt: '2024-01-15T10:00:00Z',
    readTime: 8,
    image: {
      url: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      alt: 'Senior person looking concerned while holding a phone',
      caption: 'AI voice cloning scams are becoming increasingly sophisticated and target vulnerable individuals'
    },
    tags: ['AI scams', 'voice cloning', 'senior safety', 'phone scams', 'family security'],
    category: blogCategories[0],
    featured: true,
    threatLevel: 'high',
    seo: {
      metaTitle: 'AI Voice Cloning Scams: How to Protect Seniors and Families',
      metaDescription: 'Learn about AI voice cloning scams targeting seniors. Discover red flags, protection strategies, and verification steps to keep your family safe.',
      keywords: ['AI voice cloning', 'senior scams', 'phone scams', 'family safety', 'cybersecurity', 'voice cloning protection'],
      canonicalUrl: '/blog/ai-voice-cloning-scams-seniors'
    },
    socialSharing: {
      twitterCard: 'summary_large_image',
      ogImage: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop',
      ogDescription: 'Protect yourself and your loved ones from sophisticated AI voice cloning scams with these essential safety tips.'
    },
    isAiGenerated: false
  },
  {
    id: '2',
    title: 'Recognizing Phishing Emails: A Senior-Friendly Guide',
    slug: 'recognizing-phishing-emails-seniors',
    excerpt: 'Simple tips to identify fake emails and protect your personal information from cybercriminals targeting seniors.',
    content: `
# Recognizing Phishing Emails: A Senior-Friendly Guide

Email has become an essential part of our daily lives, but unfortunately, it's also a common way for criminals to try to steal your personal information. These fake emails, called "phishing" emails, are designed to trick you into giving away passwords, bank details, or other sensitive information.

## What Is Phishing?

Phishing (pronounced "fishing") is when criminals send fake emails pretending to be from trusted companies or organizations. They "fish" for your personal information by creating urgent or scary situations that make you want to act quickly.

## Common Types of Phishing Emails

### Bank and Financial Scams
- Claims your account has been compromised
- Requests to verify your account information
- Warnings about suspicious activity
- Offers for special financial deals

### Tech Support Scams
- Claims your computer has a virus
- Fake messages from Microsoft, Apple, or other tech companies
- Requests to download software or allow remote access

### Government and Official Scams
- Fake IRS or Social Security messages
- Claims about benefits or refunds
- Requests for personal documentation

### Shopping and Delivery Scams
- Fake package delivery notifications
- Phony order confirmations
- Fake refund or return requests

## Red Flags to Look For

### Email Address Issues
- **Misspelled domains**: amaz0n.com instead of amazon.com
- **Strange email addresses**: Random letters and numbers
- **Generic greetings**: "Dear Customer" instead of your name

### Content Warning Signs
- **Urgent language**: "Act now!" or "Your account will be closed!"
- **Threats**: "Your computer is infected!" or "Legal action will be taken!"
- **Too good to be true**: "You've won $10,000!" or "Free gift!"
- **Grammar and spelling errors**: Professional companies proofread their emails

### Suspicious Links and Attachments
- **Hover before clicking**: Hover your mouse over links to see where they really go
- **Unexpected attachments**: Don't open attachments from unknown senders
- **Shortened URLs**: Links that use bit.ly or similar services

## How to Protect Yourself

### Before You Click
1. **Take a deep breath**: Don't let urgency cloud your judgment
2. **Check the sender**: Look carefully at the email address
3. **Think about context**: Were you expecting this email?
4. **Hover over links**: See where they actually lead

### Verification Steps
1. **Contact the company directly**: Use phone numbers from official websites
2. **Visit websites directly**: Type the company's web address yourself
3. **Ask family or friends**: Get a second opinion if you're unsure
4. **Check official sources**: Look at the company's real website for notices

### Safe Email Practices
- **Keep software updated**: Update your email program and antivirus software
- **Use strong passwords**: Create unique passwords for important accounts
- **Enable two-factor authentication**: Add an extra layer of security
- **Regular backups**: Keep important files backed up safely

## What to Do If You've Been Tricked

### Immediate Steps
1. **Don't panic**: You're not alone, and there are steps to recover
2. **Change passwords**: Update passwords for affected accounts
3. **Contact your bank**: Alert them if financial information was shared
4. **Monitor accounts**: Watch for unusual activity

### Reporting
- **Forward to the FTC**: Report to reportphishing@apwg.org
- **Contact local police**: File a report if money was lost
- **Notify the real company**: Let them know their name was used in a scam

## Teaching Family Members

Share this information with family and friends:
- Show them examples of phishing emails
- Practice identifying red flags together
- Set up regular check-ins about suspicious emails
- Create a family policy for handling urgent requests

## Real-World Examples

### Example 1: Fake Bank Email
**Subject**: "URGENT: Your Bank Account Has Been Suspended"
**Red Flags**: 
- Generic greeting
- Urgent language
- Suspicious email address (bankofamerica-security@email-security.com)
- Request for immediate action

### Example 2: Tech Support Scam
**Subject**: "Your Computer Is Infected - Immediate Action Required"
**Red Flags**:
- Unsolicited tech support offer
- Fear-based language
- Request to download software
- Claims of immediate danger

## Building Good Habits

### Daily Email Habits
- **Read carefully**: Don't rush through emails
- **Question urgency**: Real emergencies rarely happen via email
- **Verify independently**: Check claims through official channels
- **Trust your instincts**: If something feels wrong, it probably is

### Monthly Security Review
- **Check account statements**: Look for unusual activity
- **Update passwords**: Rotate important passwords regularly
- **Review security settings**: Check privacy settings on accounts
- **Educate yourself**: Stay informed about new scam tactics

## Remember: You're Not Alone

Many people fall victim to phishing scams - even tech-savvy individuals. The key is to stay informed, stay cautious, and never hesitate to ask for help when something seems suspicious.

When in doubt, don't click, don't download, and don't share personal information. It's always better to be safe than sorry.
    `,
    author: {
      name: 'Michael Rodriguez',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      bio: 'Digital security educator with 15 years of experience in email security'
    },
    publishedAt: '2024-01-10T14:30:00Z',
    readTime: 12,
    image: {
      url: 'https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      alt: 'Person reading an email on a laptop with a concerned expression',
      caption: 'Learning to identify phishing emails is crucial for online safety'
    },
    tags: ['phishing', 'email security', 'seniors', 'cybersecurity', 'online safety'],
    category: blogCategories[1],
    featured: true,
    threatLevel: 'medium',
    seo: {
      metaTitle: 'Phishing Email Guide for Seniors: How to Stay Safe Online',
      metaDescription: 'Learn to recognize and avoid phishing emails with this comprehensive guide designed specifically for seniors. Protect your personal information today.',
      keywords: ['phishing emails', 'email scams', 'senior cybersecurity', 'online safety', 'email security', 'internet safety'],
      canonicalUrl: '/blog/recognizing-phishing-emails-seniors'
    },
    socialSharing: {
      twitterCard: 'summary_large_image',
      ogImage: 'https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop',
      ogDescription: 'Essential guide for seniors to recognize and avoid phishing emails. Stay safe online with these practical tips.'
    },
    isAiGenerated: false
  },
  {
    id: '3',
    title: 'Creating Strong Passwords: A Simple Guide for Everyone',
    slug: 'creating-strong-passwords-guide',
    excerpt: 'Learn how to create and manage strong passwords that keep your accounts secure, with easy-to-follow tips and practical examples.',
    content: `
# Creating Strong Passwords: A Simple Guide for Everyone

Your passwords are like the keys to your digital life. Just as you wouldn't use a flimsy lock on your front door, you shouldn't use weak passwords to protect your important online accounts.

## Why Strong Passwords Matter

Weak passwords are like leaving your front door unlocked. Criminals use computer programs that can guess millions of passwords per second, making simple passwords easy targets.

### What Hackers Look For
- **Personal information**: Names, birthdays, addresses
- **Simple patterns**: 123456, password, qwerty
- **Dictionary words**: Common words found in dictionaries
- **Repeated passwords**: Using the same password everywhere

## What Makes a Password Strong?

A strong password has four key qualities:

### 1. Length (12+ Characters)
Longer passwords are exponentially harder to crack. Each additional character makes your password significantly more secure.

### 2. Complexity
Mix different types of characters:
- **Uppercase letters** (A, B, C)
- **Lowercase letters** (a, b, c)
- **Numbers** (1, 2, 3)
- **Special characters** (!, @, #, $)

### 3. Unpredictability
Avoid:
- Personal information (name, birthday, address)
- Common words or phrases
- Keyboard patterns (qwerty, 123456)
- Simple substitutions (password becomes p@ssw0rd)

### 4. Uniqueness
Each account should have its own password. If one gets compromised, the others remain safe.

## Easy Methods to Create Strong Passwords

### Method 1: The Passphrase Method
Create a sentence and use the first letter of each word, adding numbers and symbols.

**Example**:
- Sentence: "I love walking my dog Buddy in the park every morning at 7am!"
- Password: "IlwmdBitpema7a!"

### Method 2: The Three Random Words Method
Combine three unrelated words with numbers and symbols.

**Example**:
- Words: Piano, Butterfly, Sandwich
- Password: "Piano29Butterfly!Sandwich"

### Method 3: The Memory Palace Method
Think of a familiar place and create a story.

**Example**:
- Place: Your kitchen
- Story: "3 Red apples fell Off my Counter, Breaking 1 Bowl!"
- Password: "3RafOmC,B1B!"

## Password Management Made Simple

### Option 1: Password Managers (Recommended)
Password managers are like a secure vault for all your passwords.

**Popular options**:
- **Bitwarden** (free and premium options)
- **1Password** (premium, very user-friendly)
- **Dashlane** (good for beginners)

**Benefits**:
- Generates strong passwords automatically
- Remembers all your passwords
- Works across all your devices
- Only requires remembering one master password

### Option 2: Written Password Log
If technology feels overwhelming, a written log can work:
- Use a dedicated notebook
- Store it in a secure location
- Never leave it near your computer
- Consider using hints rather than full passwords

### Option 3: Browser Password Managers
Most web browsers offer built-in password managers:
- Chrome, Firefox, Safari, and Edge all include this feature
- They automatically suggest strong passwords
- They sync across devices logged into the same account

## Two-Factor Authentication (2FA)

Adding 2FA is like having a second lock on your door.

### How It Works
1. You enter your password (first factor)
2. You provide a second form of verification:
   - Text message code
   - Email code
   - Authenticator app code
   - Fingerprint or face recognition

### Setting Up 2FA
Most major services offer 2FA:
- **Email accounts** (Gmail, Yahoo, Outlook)
- **Banking websites**
- **Social media platforms**
- **Shopping sites**

Look for "Security Settings" or "Two-Factor Authentication" in your account settings.

## Common Password Mistakes to Avoid

### Mistake 1: Using Personal Information
**Don't use**:
- Your name or family members' names
- Your address or phone number
- Your birthday or anniversary
- Your pet's name

### Mistake 2: Simple Patterns
**Avoid**:
- 123456 or password
- Keyboard patterns like qwerty
- Simple letter substitutions (@ for a, 0 for o)

### Mistake 3: Reusing Passwords
**The risk**: If one account gets hacked, all accounts using that password are at risk.

### Mistake 4: Sharing Passwords
**Remember**:
- Don't share passwords via email or text
- Don't write passwords on sticky notes
- Don't tell passwords to others over the phone

## Updating Your Passwords

### When to Change Passwords
- **Immediately**: If you suspect an account has been compromised
- **After data breaches**: When companies report security incidents
- **Regularly**: Every 6-12 months for important accounts
- **When leaving**: Change shared passwords when relationships end

### How to Update Safely
1. **Start with most important accounts**: Banking, email, healthcare
2. **Use the account's official website**: Don't click links in emails
3. **Log out of all devices**: Force re-authentication everywhere
4. **Update recovery information**: Ensure backup emails and phone numbers are current

## Teaching Family Members

### Share Password Safety
- Show family members how to create strong passwords
- Help them set up password managers
- Practice identifying phishing attempts together
- Create a family plan for password emergencies

### For Grandchildren
- Teach them early about password safety
- Show them how different passwords protect different things
- Make it a fun learning experience
- Set a good example with your own password habits

## Signs Your Password May Be Compromised

Watch for these warning signs:
- **Unexpected login notifications**
- **Changes you didn't make** to account settings
- **Emails you didn't send** from your account
- **Purchases you didn't make**
- **Friends receiving spam** from your accounts

## What to Do If You're Hacked

### Immediate Steps
1. **Change your password immediately**
2. **Check recent account activity**
3. **Enable two-factor authentication**
4. **Contact the company's support team**

### Follow-up Actions
- **Monitor accounts closely** for several weeks
- **Check credit reports** if financial information may be involved
- **Consider identity monitoring services**
- **Learn from the experience** and improve security

## Making It a Habit

### Start Small
- Focus on your most important accounts first
- Update 2-3 passwords per week
- Don't try to change everything at once
- Celebrate small victories

### Build Routine
- Set monthly reminders to review password security
- Keep security software updated
- Stay informed about new threats
- Share knowledge with friends and family

## Remember: Security Is a Journey

Perfect security doesn't exist, but good password habits significantly improve your safety online. Start with one or two changes, and gradually build better habits over time.

The goal isn't to be perfect immediately - it's to be safer today than you were yesterday.
    `,
    author: {
      name: 'Jessica Thompson',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      bio: 'Cybersecurity consultant specializing in accessible security education'
    },
    publishedAt: '2024-01-05T09:00:00Z',
    readTime: 15,
    image: {
      url: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      alt: 'Digital lock icon on a computer screen representing password security',
      caption: 'Strong passwords are your first line of defense against cyber threats'
    },
    tags: ['passwords', 'security', 'online safety', 'password managers', '2FA'],
    category: blogCategories[4],
    featured: false,
    threatLevel: 'medium',
    seo: {
      metaTitle: 'Strong Password Guide: Create Secure Passwords That Protect You',
      metaDescription: 'Learn how to create strong passwords and manage them safely. Complete guide with practical tips for password security and two-factor authentication.',
      keywords: ['strong passwords', 'password security', 'password manager', 'two factor authentication', 'cybersecurity', 'online safety'],
      canonicalUrl: '/blog/creating-strong-passwords-guide'
    },
    socialSharing: {
      twitterCard: 'summary_large_image',
      ogImage: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop',
      ogDescription: 'Master password security with this comprehensive guide. Learn to create and manage strong passwords that keep your accounts safe.'
    },
    isAiGenerated: false
  }
];