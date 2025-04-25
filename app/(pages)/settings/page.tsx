"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  Bell,
  ChevronLeft,
  CreditCard,
  Globe,
  HelpCircle,
  Lock,
  LogOut,
  Moon,
  Save,
  Shield,
  Sun,
  User,
  Volume2,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SettingsPage() {
  const router = useRouter()
  const [theme, setTheme] = useState<"light" | "dark" | "system">("light")

  return (
    <div className="container mx-auto py-4 md:px-6 max-w-5xl">
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="icon" className="mr-2" onClick={() => router.back()}>
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Back</span>
        </Button>
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>

      <Tabs defaultValue="account" className="w-full">
        <TabsList className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 mb-8">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="playback">Playback</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="privacy" className="hidden md:inline-flex">
            Privacy
          </TabsTrigger>
          <TabsTrigger value="billing" className="hidden lg:inline-flex">
            Billing
          </TabsTrigger>
        </TabsList>

        {/* Account Settings */}
        <TabsContent value="account">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="mr-2 h-5 w-5" />
                  Profile Information
                </CardTitle>
                <CardDescription>
                  Update your account information and how it appears across the platform.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input id="firstName" defaultValue="Alex" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input id="lastName" defaultValue="Johnson" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="alex.johnson@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" defaultValue="alexjmusic" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="ml-auto">
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="mr-2 h-5 w-5" />
                  Password
                </CardTitle>
                <CardDescription>Change your password to keep your account secure.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current password</Label>
                  <Input id="currentPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword">New password</Label>
                  <Input id="newPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm password</Label>
                  <Input id="confirmPassword" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="mr-2">
                  Cancel
                </Button>
                <Button>Update Password</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-destructive">
                  <LogOut className="mr-2 h-5 w-5" />
                  Sign Out
                </CardTitle>
                <CardDescription>Sign out from your account on this device.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="destructive">Sign Out</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Appearance Settings */}
        <TabsContent value="appearance">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                {theme === "dark" ? <Moon className="mr-2 h-5 w-5" /> : <Sun className="mr-2 h-5 w-5" />}
                Appearance
              </CardTitle>
              <CardDescription>Customize how the application looks on your device.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Theme</Label>
                <RadioGroup
                  defaultValue={theme}
                  onValueChange={(value) => setTheme(value as "light" | "dark" | "system")}
                  className="flex flex-col space-y-1"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="light" id="theme-light" />
                    <Label htmlFor="theme-light" className="flex items-center">
                      <Sun className="mr-2 h-4 w-4" />
                      Light
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="dark" id="theme-dark" />
                    <Label htmlFor="theme-dark" className="flex items-center">
                      <Moon className="mr-2 h-4 w-4" />
                      Dark
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="system" id="theme-system" />
                    <Label htmlFor="theme-system">System default</Label>
                  </div>
                </RadioGroup>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label>Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger className="w-full md:w-[240px]">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                    <SelectItem value="fr">Français</SelectItem>
                    <SelectItem value="de">Deutsch</SelectItem>
                    <SelectItem value="ja">日本語</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto">Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Playback Settings */}
        <TabsContent value="playback">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Volume2 className="mr-2 h-5 w-5" />
                Playback Settings
              </CardTitle>
              <CardDescription>Customize your music playback experience.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Audio Quality</Label>
                <Select defaultValue="high">
                  <SelectTrigger className="w-full md:w-[240px]">
                    <SelectValue placeholder="Select quality" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="auto">Auto (Recommended)</SelectItem>
                    <SelectItem value="low">Low (96 kbps)</SelectItem>
                    <SelectItem value="normal">Normal (160 kbps)</SelectItem>
                    <SelectItem value="high">High (320 kbps)</SelectItem>
                    <SelectItem value="lossless">Lossless (1411 kbps)</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm text-muted-foreground mt-1">Higher quality uses more data and bandwidth.</p>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="autoplay">Autoplay</Label>
                    <p className="text-sm text-muted-foreground">
                      Automatically play similar songs when your music ends
                    </p>
                  </div>
                  <Switch id="autoplay" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="crossfade">Crossfade</Label>
                    <p className="text-sm text-muted-foreground">Allow songs to blend into each other</p>
                  </div>
                  <Switch id="crossfade" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="normalize">Normalize Volume</Label>
                    <p className="text-sm text-muted-foreground">Set the same volume level for all tracks</p>
                  </div>
                  <Switch id="normalize" defaultChecked />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto">Save Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Notifications Settings */}
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="mr-2 h-5 w-5" />
                Notification Preferences
              </CardTitle>
              <CardDescription>Control how and when you receive notifications.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-notifications">Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive updates about new releases and features</p>
                  </div>
                  <Switch id="email-notifications" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="push-notifications">Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">Get alerts on your device</p>
                  </div>
                  <Switch id="push-notifications" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="artist-updates">Artist Updates</Label>
                    <p className="text-sm text-muted-foreground">
                      Be notified when your favorite artists release new music
                    </p>
                  </div>
                  <Switch id="artist-updates" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="playlist-updates">Playlist Updates</Label>
                    <p className="text-sm text-muted-foreground">Get notified when playlists you follow are updated</p>
                  </div>
                  <Switch id="playlist-updates" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="marketing">Marketing Communications</Label>
                    <p className="text-sm text-muted-foreground">Receive offers, surveys and news about our services</p>
                  </div>
                  <Switch id="marketing" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto">Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Privacy Settings */}
        <TabsContent value="privacy">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2 h-5 w-5" />
                Privacy & Security
              </CardTitle>
              <CardDescription>Manage your privacy settings and account security.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="private-session">Private Session</Label>
                    <p className="text-sm text-muted-foreground">
                      Listen anonymously without updating your play history
                    </p>
                  </div>
                  <Switch id="private-session" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="data-sharing">Data Sharing</Label>
                    <p className="text-sm text-muted-foreground">Share listening data to improve recommendations</p>
                  </div>
                  <Switch id="data-sharing" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                  </div>
                  <Switch id="two-factor" />
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <h3 className="font-medium">Connected Services</h3>
                <p className="text-sm text-muted-foreground">Manage third-party services connected to your account.</p>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Globe className="h-5 w-5 mr-2" />
                      <div>
                        <p className="text-sm font-medium">Facebook</p>
                        <p className="text-xs text-muted-foreground">Connected on Jan 12, 2023</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Disconnect
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Globe className="h-5 w-5 mr-2" />
                      <div>
                        <p className="text-sm font-medium">Google</p>
                        <p className="text-xs text-muted-foreground">Connected on Mar 7, 2023</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Disconnect
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="text-destructive hover:text-destructive hover:bg-destructive/10">
                Delete Account
              </Button>
              <Button className="ml-auto">Save Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Billing Settings */}
        <TabsContent value="billing">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="mr-2 h-5 w-5" />
                Subscription & Billing
              </CardTitle>
              <CardDescription>Manage your subscription plan and payment methods.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-lg border p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">Premium Plan</h3>
                    <p className="text-sm text-muted-foreground">$9.99/month</p>
                    <ul className="text-sm mt-2 space-y-1">
                      <li className="flex items-center">
                        <span className="mr-2 text-primary">✓</span> Ad-free music listening
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-primary">✓</span> Download songs for offline playback
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-primary">✓</span> High quality audio (up to 320 kbps)
                      </li>
                    </ul>
                  </div>
                  <Button variant="outline">Change Plan</Button>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm">
                    Next billing date: <span className="font-medium">June 15, 2023</span>
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Payment Methods</h3>
                <div className="rounded-lg border p-4 mt-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="h-8 w-12 bg-muted rounded flex items-center justify-center mr-3">
                        <span className="text-xs font-medium">VISA</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Visa ending in 4242</p>
                        <p className="text-xs text-muted-foreground">Expires 12/2025</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                      <Button variant="ghost" size="sm">
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="mt-2">
                  Add Payment Method
                </Button>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Billing History</h3>
                <div className="rounded-lg border overflow-hidden mt-2">
                  <div className="grid grid-cols-3 p-3 bg-muted text-sm font-medium">
                    <div>Date</div>
                    <div>Amount</div>
                    <div className="text-right">Invoice</div>
                  </div>
                  <div className="divide-y">
                    <div className="grid grid-cols-3 p-3 text-sm">
                      <div>May 15, 2023</div>
                      <div>$9.99</div>
                      <div className="text-right">
                        <Button variant="link" className="h-auto p-0">
                          Download
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 p-3 text-sm">
                      <div>Apr 15, 2023</div>
                      <div>$9.99</div>
                      <div className="text-right">
                        <Button variant="link" className="h-auto p-0">
                          Download
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 p-3 text-sm">
                      <div>Mar 15, 2023</div>
                      <div>$9.99</div>
                      <div className="text-right">
                        <Button variant="link" className="h-auto p-0">
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="text-destructive hover:text-destructive hover:bg-destructive/10">
                Cancel Subscription
              </Button>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          Need help?{" "}
          <Button variant="link" className="h-auto p-0">
            <HelpCircle className="h-3 w-3 inline mr-1" /> Contact Support
          </Button>
        </p>
      </div>
    </div>
  )
}
