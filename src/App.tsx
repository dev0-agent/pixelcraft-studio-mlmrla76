import { 
  Download, 
  Undo2, 
  Redo2, 
  Scissors, 
  RotateCw,
  Image as ImageIcon,
  Sun,
  Contrast,
  Droplet,
  Wand2,
  FlipHorizontal,
  FlipVertical,
  Maximize
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

export default function App() {
  return (
    <div className="flex h-screen w-full flex-col bg-background text-foreground overflow-hidden">
      {/* Header */}
      <header className="flex h-14 items-center justify-between border-b px-6 shrink-0">
        <div className="flex items-center gap-2">
          <div className="bg-primary rounded p-1">
            <ImageIcon className="h-5 w-5 text-primary-foreground" />
          </div>
          <h1 className="text-xl font-bold tracking-tight">PixelCraft Studio</h1>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" title="Undo">
            <Undo2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" title="Redo">
            <Redo2 className="h-4 w-4" />
          </Button>
          <Separator orientation="vertical" className="mx-2 h-6" />
          <Button className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar: Tools & Filters */}
        <aside className="w-64 border-r bg-muted/30 flex flex-col shrink-0">
          <Tabs defaultValue="tools" className="flex-1 flex flex-col">
            <TabsList className="w-full justify-start rounded-none border-b bg-transparent px-4 h-12">
              <TabsTrigger value="tools" className="data-active:bg-transparent data-active:shadow-none data-active:border-b-2 data-active:border-primary rounded-none h-full">Tools</TabsTrigger>
              <TabsTrigger value="filters" className="data-active:bg-transparent data-active:shadow-none data-active:border-b-2 data-active:border-primary rounded-none h-full">Filters</TabsTrigger>
            </TabsList>
            <ScrollArea className="flex-1">
              <TabsContent value="tools" className="p-4 space-y-4 m-0">
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="flex flex-col h-20 gap-2 items-center justify-center">
                    <Scissors className="h-5 w-5 text-muted-foreground" />
                    <span className="text-xs">Crop</span>
                  </Button>
                  <Button variant="outline" className="flex flex-col h-20 gap-2 items-center justify-center">
                    <RotateCw className="h-5 w-5 text-muted-foreground" />
                    <span className="text-xs">Rotate</span>
                  </Button>
                  <Button variant="outline" className="flex flex-col h-20 gap-2 items-center justify-center">
                    <FlipHorizontal className="h-5 w-5 text-muted-foreground" />
                    <span className="text-xs">Flip H</span>
                  </Button>
                  <Button variant="outline" className="flex flex-col h-20 gap-2 items-center justify-center">
                    <FlipVertical className="h-5 w-5 text-muted-foreground" />
                    <span className="text-xs">Flip V</span>
                  </Button>
                  <Button variant="outline" className="flex flex-col h-20 gap-2 items-center justify-center">
                    <Maximize className="h-5 w-5 text-muted-foreground" />
                    <span className="text-xs">Resize</span>
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="filters" className="p-4 space-y-2 m-0">
                <div className="grid grid-cols-1 gap-2">
                  {['Grayscale', 'Sepia', 'Invert', 'Vintage', 'Cool', 'Warm'].map((filter) => (
                    <Button key={filter} variant="outline" className="justify-start gap-3 h-12">
                      <Wand2 className="h-4 w-4 text-muted-foreground" />
                      <span>{filter}</span>
                    </Button>
                  ))}
                </div>
              </TabsContent>
            </ScrollArea>
          </Tabs>
        </aside>

        {/* Central Canvas Area */}
        <main className="flex-1 relative flex items-center justify-center bg-muted/10 overflow-auto">
          <div className="flex flex-col items-center gap-4 text-muted-foreground animate-in fade-in duration-500">
            <div className="p-8 rounded-full bg-muted/50 border-2 border-dashed">
              <ImageIcon className="h-12 w-12 opacity-20" />
            </div>
            <div className="text-center">
              <p className="font-medium text-foreground">No image uploaded</p>
              <p className="text-sm">Drag and drop an image here to start editing</p>
            </div>
            <Button variant="secondary">Browse Files</Button>
          </div>
        </main>

        {/* Right Sidebar: Adjustments */}
        <aside className="w-80 border-l bg-muted/30 flex flex-col shrink-0">
          <div className="h-12 flex items-center px-4 border-b">
            <h2 className="font-semibold text-sm tracking-tight">Adjustments</h2>
          </div>
          <ScrollArea className="flex-1">
            <div className="p-6 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="flex items-center gap-2">
                    <Sun className="h-4 w-4 text-muted-foreground" />
                    Brightness
                  </Label>
                  <span className="text-xs font-mono text-muted-foreground">100%</span>
                </div>
                <Slider defaultValue={[100]} min={0} max={200} />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="flex items-center gap-2">
                    <Contrast className="h-4 w-4 text-muted-foreground" />
                    Contrast
                  </Label>
                  <span className="text-xs font-mono text-muted-foreground">100%</span>
                </div>
                <Slider defaultValue={[100]} min={0} max={200} />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="flex items-center gap-2">
                    <Droplet className="h-4 w-4 text-muted-foreground" />
                    Saturation
                  </Label>
                  <span className="text-xs font-mono text-muted-foreground">100%</span>
                </div>
                <Slider defaultValue={[100]} min={0} max={200} />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="flex items-center gap-2">
                    <ImageIcon className="h-4 w-4 text-muted-foreground" />
                    Blur
                  </Label>
                  <span className="text-xs font-mono text-muted-foreground">0px</span>
                </div>
                <Slider defaultValue={[0]} min={0} max={20} />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="flex items-center gap-2">
                    <RotateCw className="h-4 w-4 text-muted-foreground" />
                    Hue Rotate
                  </Label>
                  <span className="text-xs font-mono text-muted-foreground">0°</span>
                </div>
                <Slider defaultValue={[0]} min={0} max={360} />
              </div>
            </div>
          </ScrollArea>
          <div className="p-4 border-t bg-muted/50">
            <Button variant="outline" className="w-full">Reset Adjustments</Button>
          </div>
        </aside>
      </div>
    </div>
  );
}
